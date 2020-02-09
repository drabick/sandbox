const express = require('express');
const router = express.Router();

//For handlebar index page
router.get('/about', (req,res) => {
    res.send('this is from get routers about');
});

module.exports = router;