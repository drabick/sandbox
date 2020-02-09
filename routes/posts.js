const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/', (req,res) =>{
    console.log(req.body);
})

module.exports = router;