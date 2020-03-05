//db schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaring collection schema
let Product = new Schema({
    title : {type : String},
    price : {type : Number},
    image : {type : String},
    info : {type : String},
    company : {type : String}
},
{
    collection : 'products'
});

module.exports = mongoose.model('Product', Product);