const express = require('express') 
const path = require('path') 
const hbs = require('hbs')

const mainRouter = require('./routers/main') 
const aboutRouter = require('./routers/about') 

const app = express() 

const dir = path.join(__dirname, "../public") 
app.use(express.static(dir)) 

app.set('view engine','hbs')

const viewsPath = path.join(__dirname, "../templates")
app.set('views', viewsPath)

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)

app.use(mainRouter)
app.use(aboutRouter)

const port = process.env.PORT || 3000 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})