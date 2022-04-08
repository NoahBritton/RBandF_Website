const express = require('express')
const router = express.Router()

router.get('/tires', (req, res) => {
    res.render('tires')
})

module.exports = router