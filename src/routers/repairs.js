const express = require('express')
const router = express.Router()

router.get('/repairs', (req, res) => {
    res.render('repairs')
})

module.exports = router