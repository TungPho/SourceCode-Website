const express = require("express");

const productRouter = express.Router();

// default route
productRouter.get("", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

module.exports = productRouter;
