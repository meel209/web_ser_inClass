console.log("New");
const express = require('express');

const quoteCards = require('./game/quoteCards');

const app = express();
const port = 3000;

app
    
    .get('/',(req,res) => res.send('This class is awesome') )
    //how to use common js
    .get('/game/quoteCards',(req,res) => res.send(quoteCards) );

app.listen(port, () => console.log('Listing at http://localhost:${port}') );