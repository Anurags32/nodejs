require('dotenv').config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const Productjson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.create(Productjson);
        console.log("succses");
    } catch (error) {
        console.log(error);
    }
}
start();