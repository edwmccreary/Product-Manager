const { Test } = require('../models/test.model');

module.exports.test = (req,res)=>{
    res.json({
        message: "This is a test from test controller"
    });
}

module.exports.createTest = (req,res)=>{
    const {name, number} = req.body;
    Test.create({
        name,
        number
    })
    .then(test=>res.json(test))
    .catch(err=>res.json(err));
}