const { model, Schema, Types } = require("mongoose");

const COLLECTION_NAME = "sourceCode";
const DOCUMENT_NAME = "sourceCodes";

const sourceCodeSchema = Schema(
  {
    source_code_name: {
      type: String,
      required: true,
    },
    source_code_category: {
      type: String,
      required: true,
    },
    link: {
      type: Types.ObjectId,
      ref: "link",
      required: true,
    },
    shop_id: {
      type: Types.ObjectId,
      ref: "shop",
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
  }
);
module.exports = {
  sourceCode: model(DOCUMENT_NAME, sourceCodeSchema, COLLECTION_NAME),
};
