const Ticket = require('../models/ticketModel')
const mongoose = require('mongoose')

const createTicket = async(req,res) => {
    const {id,booked } = req.body
    try {
        const ticket = await Ticket.create({id,booked})
        res.status(200).json(ticket)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const updateTicket = async(req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Ticket'})
    }
    const ticket = await Ticket.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!ticket) {
        return res.status(400).json({error: 'No such Ticket'})
    }
    res.status(200).json(ticket)
}
const getTicket = async(req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Ticket'})
    }
    const ticket = await Ticket.findById(id)
    if (!ticket) {
        return res.status(404).json({error: 'No such Ticket'})
    }
    res.status(200).json(ticket)
}
const getTickets = async(req,res) => {
    const tickets = await Ticket.find({});
    res.status(200).json(tickets)
}
module.exports = {
    createTicket,
    updateTicket,
    getTicket,
    getTickets
}