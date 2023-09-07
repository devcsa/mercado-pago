# Processamento de pagamento com cartão via Checkout Transparente

## :computer: Tecnologias

-  Node.js
-  [NPM](https://www.npmjs.com) (dependency manager)
-  Express

## 💡 Requisitos

-  Node.js 10 ou mais recente (você pode baixar [aqui](https://nodejs.org/)).
-  [Leia nossas instruções](https://www.mercadopago.com/developers/pt/guides/overview#bookmark_el_desarrollo_con_c%C3%B3digo) sobre como criar uma aplicação no Painel de Desenvolvedores do Mercado Pago para obter a public key e o access token. Essas chaves irão te dar acesso às APIs do Mercado Pago.

## :gear: Instalação

1. Clone o projeto.

```bash
git clone https://github.com/devcsa/mercado-pago.git
```

2. Acesse a pasta raiz do projeto.

```bash
cd mercado-pago
```

3. Instale as dependências necessárias.

```bash
npm install
```

## 🌟 Como executar

1. Crie o arquivo de variávies de ambiente ".env"
2. Adicione suas credenciais:-bash

```bash
  MERCADO_PAGO_SAMPLE_PUBLIC_KEY=YOUR_PUBLIC_KEY
  MERCADO_PAGO_SAMPLE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

3. No terminal, inicie a aplicação

```bash
  npm start
```

2. Lembre-se de trocar os valores `YOUR_PUBLIC_KEY` e `YOUR_ACCESS_TOKEN` pelas [credenciais](https://www.mercadopago.com/developers/panel) da sua conta.

3. Acesse [http://localhost:8080](http://localhost:8080) em seu navegador.

### :test_tube: Testes

Em nossas [instruções de teste](https://www.mercadopago.com/developers/pt/guides/online-payments/checkout-api/testing) você irá encontrar **[cartões de crédito](https://www.mercadopago.com/developers/pt/guides/online-payments/checkout-api/testing#bookmark_cart%C3%B5es_de_teste)** que podem ser usados para simular o pagamento neste exemplo e um guia sobre como criar **[usuários de teste](https://www.mercadopago.com/developers/pt/guides/online-payments/checkout-api/testing#bookmark_como_criar_usu%C3%A1rios)**.

## :bookmark: Licença

MIT License. Copyright (c) 2021 - Mercado Pago <br/>
Para mais informações, consulte o arquivo [LICENSE](LICENSE).
