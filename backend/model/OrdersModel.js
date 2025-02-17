const {model} = require("mongoose");
const {OrdersSchema} = require('../schemas/OrdersSchema');

// Define model
const OrdersModel = new model('order', OrdersSchema);

module.exports = {OrdersModel};