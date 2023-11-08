const Winner = require('../models/winnerModel')

const createWinner = async(req,res) => {
    const {username,draw,amount} = req.body
    try {
        const winner = await Winner.create({username,draw,amount})
        res.status(200).json(winner)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getWinners = async(req,res) => {
    const winners = await Winner.find({});
    res.status(200).json(winners)
}
module.exports = {
    createWinner,
    getWinners
}