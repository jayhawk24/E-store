const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

const Category = mongoose.model('categories', categorySchema);

module.exports = Category;
