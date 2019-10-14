const express = require('express');


const cards = require("./cards-Router")
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/cards', cards);


app.use((req, res) => {
    res.send(404)
});


app.listen(7743, () => {
    console.log('Example app listening on port 7743!');
});













