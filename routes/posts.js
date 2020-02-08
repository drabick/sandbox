const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are on post page');    
});

router.get('/specific', (req,res) => {
    res.send('We are on specific page');    
});

router.post('/', (req,res) =>{
    console.log(req.body);
})

module.exports = router;