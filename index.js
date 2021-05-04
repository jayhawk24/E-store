const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.set('useFindAndModify', false);

// seed DB
// const seed = require('./seedDB');
// seed();

// session and flash messages config
const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionConfig));
app.use(flash());

// Inint the passport and sessions for storing the users
app.use(passport.initialize());
app.use(passport.session());

// Configuring the passport to use local strategy

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

// Routes

app.use(productRoutes);
app.use(authRoutes);

app.get('/', (req, res) => {
    res.redirect('/products');
});
app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
