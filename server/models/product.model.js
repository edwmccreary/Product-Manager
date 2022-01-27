const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is required"],
        minlength: [1, "Product title must be atleast 1 character long"]
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, "Product Price is required"]
    },
    description: {
        type: String,
        required: [true, "Product Description is required"],
        minlength: [1, "Product description must be atleast 1 character long"]
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;