const express = require('express');

const app = express();

//routes
app.get('/', (req,res) => {
    res.send('We are on home page');    
});
// lisgerner

app.listen(3000);