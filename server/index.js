"use strict";
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const serverless = require("serverless-http");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");
const FlowApi = require("flowcl-node-api-client");
const config = require("./config/index");
const configFlow = require("./config.json");

const { port, allowedDomains } = config;

const app = express();
app.use(
  cors({
    origin: allowedDomains,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.post("/apiFlow/create_order", async (req, res) => {
  try {
    // Prepara el arreglo de datos
    const params = {
      commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
      subject: "Pago online Intercourier",
      currency: "CLP",
      amount: req.body.amount,
      email: req.body.email,
      paymentMethod: 9,
      urlConfirmation: configFlow.baseURL + "/payment_confirm",
      urlReturn: configFlow.baseURL + "/result",
    };
    // Define el metodo a usar
    const serviceName = "payment/create";

    // Instancia la clase FlowApi
    const flowApi = new FlowApi(configFlow);

    // Ejecuta el servicio
    let response = await flowApi.send(serviceName, params, "POST");

    //Prepara url para redireccionar el browser del pagador
    let redirect = response.url + "?token=" + response.token;
    //res.send(JSON.stringify(req.body.email));
    res.json({
      redirect,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/apiFlow/payment_confirm", async (req, res) => {
  try {
    let params = {
      token: req.body.token,
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(configFlow);
    let response = await flowApi.send(serviceName, params, "GET");
    //Actualiza los datos en su sistema
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
});

app.post("/apiFlow/result", async (req, res) => {
  try {
    let params = {
      token: req.body.token,
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(configFlow);
    let response = await flowApi.send(serviceName, params, "GET");
    //Actualiza los datos en su sistema
    if (response.status === 2) {
      res.redirect("http://localhost:3000/success-payment");
    }
    if (response.status === 3 || response.status === 4) {
      res.redirect("http://localhost:3000/error-payment");
    }
  } catch (error) {
    res.json({ error });
  }
});

app.post("/apiFlow/create_email", async (req, res) => {
  //Prepara los parámetros
  const params = {
    commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
    subject: "pago prueba cobro Email",
    currency: "CLP",
    amount: 2000,
    email: "efuentealba@json.cl",
    paymentMethod: 9,
    urlConfirmation: configFlow.baseURL + "/payment_confirm",
    urlReturn: configFlow.baseURL + "/result",
    forward_days_after: 1,
    forward_times: 2,
  };

  const serviceName = "payment/createEmail";

  try {
    const flowApi = new FlowApi(configFlow);

    let response = await flowApi.send(serviceName, params, "POST");

    res.json({
      response,
    });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports.handler = serverless(app);
