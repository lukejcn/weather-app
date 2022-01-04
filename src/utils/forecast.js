const request = require('request')
require('dotenv').config()

const weather = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API}&query=${encodeURIComponent(lat)},${encodeURIComponent(lon)}`
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.success === false) {
            callback(body.error.info)
        } else {
            callback(undefined, body.current)
        }
    })
}
module.exports = weather