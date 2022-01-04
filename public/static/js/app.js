const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')

const textWeather1 = document.querySelector('#weather-1')
const textWeather2 = document.querySelector('#weather-2')
const textWeatherTime = document.querySelector('#textWeatherTime')

weatherForm.addEventListener('submit', (e) => {
    textWeather1.textContent = 'Loading...'
    textWeather2.textContent = ''
    textWeatherTime.textContent = ''
    e.preventDefault()
    fetch(`/weather?address=${searchEl.value}`).then((res) => {
        res.json().then(( { error, location, currentWeather }) => {
            if (error) {
                textWeather1.textContent = error
            } else {
                textWeather1.textContent = `It is currently ${currentWeather.temperature}°C in ${location}.`
                textWeather2.textContent = `It feels like ${currentWeather.feelslike}°C and is currently ${currentWeather.weather_descriptions}. 
                 There is ${currentWeather.precip * 100}% chance of rain.`
                textWeatherTime.textContent = `This weather was observered at: ${currentWeather.observation_time}`
            }
        })
    })
})