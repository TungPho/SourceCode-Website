const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mainRouter = require("./routers/main.router");
const app = express();
app.use(mainRouter);
module.exports = app;
