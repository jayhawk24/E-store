const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    review: {
        type: String
    }
});

const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;
