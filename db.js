const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectToMongo = ()=>{
    const URL = "mongodb+srv://Bhuvi_Bhuwan:Bhuvi_Bhuwan@bnotebook.m8joifd.mongodb.net/ioe_2079?retryWrites=true&w=majority";
    //  const URL="mongodb://0.0.0.0:27017/bnotebook"
    mongoose.connect(URL)
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })
}
module.exports = connectToMongo;