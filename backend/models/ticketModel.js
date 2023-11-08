//import mongoose
const mongoose = require('mongoose')
//create Schema
const Schema = mongoose.Schema;
//create schema object
const ticketModel = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    booked:{
        type:Boolean,
        required:true
    },
    username:{
        type: String
    }
},{timestamps:true})
//create model from that schema object and export it
module.exports = mongoose.model('tickets',ticketModel)
