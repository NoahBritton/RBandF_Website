const express = require('express')
const router = express.Router()

router.get('/returns', (req, res) => {
    res.render('returns')
})

module.exports = router