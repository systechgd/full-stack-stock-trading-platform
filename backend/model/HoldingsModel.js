const {model} = require('mongoose');

// Accessing HoldingsSchema 
const {HoldingsSchema} = require("../schemas/HoldingsSchema");

// Define Model
const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = {HoldingsModel};

