//import mongoose
const mongoose = require('mongoose')
//create Schema
const Schema = mongoose.Schema;
//create schema object
const winnerModel = new Schema({
    username:{
        type: String,
        require: true
    },
    draw:{
        type:Number,
        require:true
    },
    amount:{
        type:Number,
        require:true
    }
},{timestamps:true})
//create model from that schema object and export it
module.exports = mongoose.model('winners',winnerModel)