const mangoose = require("mongoose");


const connectDB = (uri) => {
    console.log('MongoDB connected');
    return mangoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
}
module.exports = connectDB;