const express = require('express')
const router = express.Router()

router.get('/frames', (req, res) => {
    res.render('frames')
})

module.exports = router