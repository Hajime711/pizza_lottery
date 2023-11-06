require('dotenv').config()

//imports
const express = require('express')
const mongoose = require('mongoose')
const ticketRoutes = require('./routes/tickets')
const winnerRoutes = require('./routes/winners')
//create app
const app = express();
app.use(express.json())
//use the routes
app.use('/api/tickets',ticketRoutes)
app.use('./api/winners',winnerRoutes)
//connect to db using mongoose and listen for connections
// mongoose.connect(process.env.MONGO_URI)
//   .then(()=>{
//     console.log("Connected to MongoDB");
    
//   })
//   .catch((error)=>{
//     console.log(error);
//   })
app.listen(process.env.PORT,()=>{
  console.log("Listening on PORT: ",process.env.port)
})
