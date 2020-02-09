const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');

require('dotenv/config');

//Import post routes
const postsRoute = require('./routes/posts');



//middleware
app.use(bodyparser.json());

//app.use('/posts', () => {
//    console.log('THis is some middleware running');
//})

//Handlebar engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//routes
app.get('/', (req,res) => {
    res.send('We are on home page');    
});

app.use('/posts', postsRoute);


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