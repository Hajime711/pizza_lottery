//import express
const express = require('express')
const router = express.Router()

const { 
    createWinner,
    getWinners
} = require('../controllers/winnerController')


router.post('/',createWinner)
router.get('/',getWinners)

module.exports = router