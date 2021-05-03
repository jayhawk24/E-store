const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const productRoutes = require('./routes/products');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// seed DB
// const seed = require('./seedDB');
// seed();

app.use(productRoutes);
app.get('/', (req, res) => {
    res.redirect('/products');
});
app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
