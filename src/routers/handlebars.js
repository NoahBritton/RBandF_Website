const express = require('express')
const router = express.Router()

router.get('/handlebars', (req, res) => {
    res.render('handlebars')
})

module.exports = router