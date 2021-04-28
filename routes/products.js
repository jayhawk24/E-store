const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
    res.send('This is product route.');
});

module.exports = router;
