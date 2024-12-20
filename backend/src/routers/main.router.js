const express = require("express");
const sourceCodeRouter = require("./source code router/sourcecode.router");

const mainRouter = express.Router();

mainRouter.use("/api/v1", sourceCodeRouter);

module.exports = mainRouter;
