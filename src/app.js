const express = require("express");
const app = express();
// const router = express.Router();

//Rotas
const index = require("./routes/index");
const playerRoute = require("./routes/playerRoute");
const teamRoute = require("./routes/teamRoute");

app.use(express.json());

app.use("/", index);
app.use("/players", playerRoute);
app.use("/teams", teamRoute);

module.exports = app;
