require("dotenv").config();

// console.log("PUBLIC KEY", process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY);
// console.log("ACCESS TOKEN", process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN);

const open = require("open");
const path = require("path");
const express = require("express");
const mercadopago = require("mercadopago");

const mercadoPagoPublicKey = process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY;

if (!mercadoPagoPublicKey) {
   console.log("Erro: PUBLIC KEY não definida");
   process.exit(1);
}

const mercadoPagoAccessToken = process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN;

if (!mercadoPagoAccessToken) {
   console.log("Erro: ACCESS TOKEN não definido");
   process.exit(1);
}

mercadopago.configurations.setAccessToken(mercadoPagoAccessToken);

const app = express();

app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./static"));
app.use(express.json());

app.get("/", function (req, res) {
   res.status(200).render("payment", { mercadoPagoPublicKey });
});

app.post("/process_payment", (req, res) => {
   const { body } = req;
   const { payer } = body;
   const paymentData = {
      transaction_amount: Number(body.transactionAmount),
      token: body.token,
      description: body.description,
      installments: Number(body.installments),
      payment_method_id: body.paymentMethodId,
      issuer_id: body.issuerId,
      payer: {
         email: payer.email,
         identification: {
            type: payer.identification.docType,
            number: payer.identification.docNumber,
         },
      },
   };

   mercadopago.payment
      .save(paymentData)
      .then(function (response) {
         const { response: data } = response;

         res.status(201).json({
            detail: data.status_detail,
            status: data.status,
            id: data.id,
         });
      })
      .catch(function (error) {
         console.log(error);
         const { errorMessage, errorStatus } = validateError(error);
         res.status(errorStatus).json({ error_message: errorMessage });
      });
});

function validateError(error) {
   let errorMessage = "Unknown error cause";
   let errorStatus = 400;

   if (error.cause) {
      const sdkErrorMessage = error.cause[0].description;
      errorMessage = sdkErrorMessage || errorMessage;

      const sdkErrorStatus = error.status;
      errorStatus = sdkErrorStatus || errorStatus;
   }

   return { errorMessage, errorStatus };
}

app.listen(8080, () => {
   console.log("Servidor rodando na porta: 8080");
   open("http://localhost:8080");
});
