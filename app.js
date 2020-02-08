const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//middleware

//app.use('/posts', () => {
//    console.log('THis is some middleware running');
//})



//routes
app.get('/', (req,res) => {
    res.send('We are on home page');    
});

app.get('/posts', (req,res) => {
    res.send('We are on post page');    
});

//Conect to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    //'mongodb://drabick:Tron1414!@ds035448.mlab.com:35448/mcp13',
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => 
    console.log('Connected to MongoDB')
);


// lisgerner

app.listen(3000);