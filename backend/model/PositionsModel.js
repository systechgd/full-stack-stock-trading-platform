const {model} = require('mongoose');

// Accessing HoldingsSchema 
const {PositionsSchema} = require("../schemas/PositionsSchema");

// Define Model
const PositionsModel = new model("position", PositionsSchema);

module.exports = {PositionsModel};

