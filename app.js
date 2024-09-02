require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 3001;
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send('Hi, I am live');
});

app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
