const express = require('express')
const router = express.Router()

router.get('/rentals', (req, res) => {
    res.render('rentals')
})

module.exports = router