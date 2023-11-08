require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const ticketRoutes = require('./routes/tickets')
const winnerRoutes = require('./routes/winners')

const app = express();

app.use(express.json())
app.use('/api/tickets',ticketRoutes)
app.use('/api/winners',winnerRoutes)

mongoose.connect(process.env.MONGO_URI,{dbName: 'pizza_lottery'})
  .then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT,()=>{
      console.log("Listening on PORT: ",process.env.port)
    })
  })
  .catch((error)=>{
    console.log(error);
  })
