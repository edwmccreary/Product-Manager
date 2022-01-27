const Product = require("../models/product.model");

module.exports.testResponse = (req,res) => {
    res.json({message:"This is testing the Product controller"});
}

module.exports.findProduct = (req,res) => {
    Product.findOne({_id: req.params._id})
    .then(results=>res.json({results: results}))
    .catch(err=>res.status(400).json({message: "Failed Find Product: ",error: err}))
}

module.exports.findAllProducts = (req,res) => {
    Product.find({})
    .then(results=>res.json({results: results}))
    .catch(err=>res.status(400).json({message: "Failed Find All Products: ",error: err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
    .then(newProduct=>res.json({results: newProduct}))
    .catch(err=>res.status(400).json({message: "Failed Create Product: ",error: err}))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id})
    .then(results=>res.json({results: results}))
    .catch(err=>res.status(400).json({message: "Failed Delete Product: ",error: err}))
}

module.exports.deleteAllProducts = (req,res) => {
    Product.remove({})
    .then(results=>res.json({results: results}))
    .catch(err=>res.status(400).json({message: "Failed Delete All Products: ",error: err}))
}

module.exports.updateProduct = (req,res) => {
    Product.updateOne({_id: req.params._id}, req.body)
    .then(results=>res.json({results: results}))
    .catch(err=>res.status(400).json({message: "Failed to update Product: ",error: err}))
}

module.exports.findRandomProduct = (req,res) => {
    Product.find({})
    .then(results=>{
        let result = results[Math.floor(Math.random() * results.length)];
        res.json({results: result})
    })
    .catch(err=>res.status(400).json({message: "Failed Find All Products: ",error: err}))
}