const express = require('express');
const app = express();
const config = require('./config/db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4400;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser : true}).then(
    res => {
        console.log("Database connected successfully");
    },
    err => {
        console.log(err);
    }
);

app.use(cors());

const proRoute = require('./route');
app.use('/', proRoute);

app.listen(PORT, () => {
    console.log("server running");
});
