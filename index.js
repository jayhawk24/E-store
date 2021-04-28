const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const productRoutes = require('./routes/products');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(methodOverride('_method'));

app.use(productRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
