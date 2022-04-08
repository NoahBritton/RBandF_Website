const express = require('express')
const router = express.Router()

router.get('/bike-builder', (req, res) => {
    res.render('bikeBuilder')
})

module.exports = router