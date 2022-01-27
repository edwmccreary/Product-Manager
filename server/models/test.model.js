const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {type: String},
    number: {type:Number}
}, {timestamps: true});

module.exports.Test = mongoose.model("Test", testSchema);