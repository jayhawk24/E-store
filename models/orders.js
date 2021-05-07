const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
    },
    amount: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
