const express = require('express') 
const path = require('path') 
const hbs = require('hbs')

const mainRouter = require('./routers/main')
const aboutRouter = require('./routers/about')
const handlebarsRouter = require('./routers/handlebars')
const framesRouter = require('./routers/frames')
const seatsRouter = require('./routers/seats')
const tiresRouter = require('./routers/tires')
const bikeBuilderRouter = require('./routers/bikeBuilder')
const rentalsRouter = require('./routers/rentals')
const repairsRouter = require('./routers/repairs')
const returnsRouter = require('./routers/returns')

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
app.use(handlebarsRouter)
app.use(framesRouter)
app.use(seatsRouter)
app.use(tiresRouter)
app.use(bikeBuilderRouter)
app.use(rentalsRouter)
app.use(repairsRouter)
app.use(returnsRouter)

const port = process.env.PORT || 3000 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})