const Product = require("../models/product");
const getAllProducts = async (req, res) => {
    const mydata = await Product.find({});
    res.status(200).json({ mydata });
};
const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductsTestings" });
};

module.exports = { getAllProducts, getAllProductsTesting };