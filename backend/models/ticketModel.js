//import mongoose
const mongoose = require('mongoose')
//create Schema
const Schema = mongoose.Schema;
//create schema object
const ticketModel = new Schema({
    ticket:{
        type:Number,
        required:true
    },
    isBooked:{
        type:Boolean,
        required:true
    },
    username:{
        type: String,
        required: () => {
            return this.isBooked
        }
    }
},{timestamps:true})
//create model from that schema object and export it
module.exports = mongoose.Model('users',userModel)
