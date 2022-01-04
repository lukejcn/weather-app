const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('../../weather-app/utils/forecast')

const app = express()

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', (path.join(__dirname, '../templates/views')))
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('base', {
        title: 'Weather App',
        name: 'Luke Jones'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Luke'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpmessage: "Here is our help message"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'Help article not found'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: 'A location must be provided'
        })
    }
    geocode(address, (error, { lat, lon, loc } = {}) => {
        if (error) { return res.send({ error }) }
        weather(lat, lon, (e, cw) => {
            if (e) { return res.send({ e }) }
            res.send({
                currentWeather: cw,
                location: loc
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    const search = req.query.search
    console.log(search)
    res.send({
        products: [search]
    })
})

app.get('*', (req, res) => {
    res.render('404')
})
app.listen(3000, 'localhost', () => {
    console.log(`Server is up on port 3000!`)
})