//import express
const express = require('express')
const router = express.Router()

const { 
    createTicket,
    updateTicket,
    getTicket,
    getTickets
} = require('../controllers/ticketController')


router.post('/',createTicket)
router.patch('/:id',updateTicket)
router.get('/',getTickets)
router.get('/:id',getTicket)

module.exports = router