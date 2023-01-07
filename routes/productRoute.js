const express = require("express");
const { getProduct, updateProduct } = require("../controller/product");

const router = express.Router();

router.get("/",getProduct);

router.get("/update",updateProduct)


module.exports = router;