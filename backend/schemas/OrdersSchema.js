const {Schema} = require('mongoose');

// Define Schema
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchema}