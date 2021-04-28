const mongoose = require('mongoose');
mongooose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 4, max: 50 },
    price: { type: Number, required: true, max: 10 },
    desc: { type: String, max: 1000 },
    img: { type: String }
});
