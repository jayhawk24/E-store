const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ],
    txnId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    delevered: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
