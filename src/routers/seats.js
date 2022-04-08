const express = require('express')
const router = express.Router()

router.get('/seats', (req, res) => {
    res.render('seats')
})

module.exports = router