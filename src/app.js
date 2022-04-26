const express = require('express') 
const path = require('path') 
const hbs = require('hbs')

const mainRouter = require('./routers/main')
const aboutRouter = require('./routers/about')
const accountRouter = require('./routers/account')
const handlebarsRouter = require('./routers/handlebars')
const framesRouter = require('./routers/frames')
const seatsRouter = require('./routers/seats')
const tiresRouter = require('./routers/tires')
const bikeBuilderRouter = require('./routers/bikeBuilder')
const privacyRouter = require('./routers/privacy')
const checkoutRouter = require('./routers/checkout')
const supportRouter = require('./routers/support')

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
app.use(accountRouter)
app.use(handlebarsRouter)
app.use(framesRouter)
app.use(seatsRouter)
app.use(tiresRouter)
app.use(bikeBuilderRouter)
app.use(privacyRouter)
app.use(checkoutRouter)
app.use(supportRouter)

const port = process.env.PORT || 3000 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})