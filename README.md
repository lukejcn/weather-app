# Weather Application

A small weather application that uses http requests to get the current weather in a given location. 

## Installation

Clone the repository into your own directory.
```bash
git clone https://github.com/lukejcn/weather-app.git
```
###
cd into the new directory and `npm install` which will download and install the required npm packages
```bash
cd weather-app
npm install
```

## Weatherstack & Mapbox API's
The application connects to two APIs:
* **MapBox** - Used to obtain latitude and longtitude information from an address passed as a string.
* **Weatherstack** - Used to obtain weather information using the latitude and longtitude from the mapbox API.

You'll need to sign up to both of these and obtain API keys to get this app to work. 
### *Weatherstack*
* Sign up for a free account at [https://weatherstack.com/](https://weatherstack.com/)
* Visit the dashboard and get your API key![Weatherstack API](https://user-images.githubusercontent.com/76432380/148138650-470db28b-fd0d-4f74-bde3-c502e9a5a008.png)

### *MapBox*
* Sign up for a free account at [https://www.mapbox.com](https://www.mapbox.com/)
* Visit your account and get your API Key

### Environment Variables
Now that you have your API keys, you need to load them into the app. In the project's directory, create a `.env` file. Then, create two variables for your API keys called **`WEATHERSTACK_API`** and **`MAPBOX_API`**

```bash
nano .env
```

```dosini
WEATHERSTACK_API=************
MAPBOX_API=****************
```
## Requirements
* Node.js
## Run
```bash 
npm run start
```

**Run in Development mode with nodemon**
```bash
npm run dev
```
*This requires having **nodemon** installed `npm i -g nodemon`*
