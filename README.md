# Weather-Application

Weather App

This is a weather app that shows the current weather and a 7-day forecast for a given city. The app uses the OpenWeather API to retrieve the weather data.

Usage:

To use the app, enter the name of a city in the search bar and click the "Search" button or press enter. The current weather for the city will be displayed along with the city name, date, and weather icon. The temperature is displayed in Celsius, but can be converted to Fahrenheit by clicking on the temperature.

Below the current weather, the 7-day forecast for the city is displayed, showing the date, weather icon, high and low temperatures for each day.

The app also has a default location feature, which uses the browser's geolocation API to get the user's current location and display the weather for that location.

Technologies Used:

HTML
CSS
JavaScript
Axios library for making API calls
OpenWeather API for weather data

Functions:

formatDate(timestamp)
This function takes a Unix timestamp as an argument and returns a formatted string that displays the day of the week and time in hours and minutes.

formatDay(timestamp)
This function takes a Unix timestamp as an argument and returns a formatted string that displays the abbreviated day of the week.

displayForecast(response)
This function takes the response data from the OpenWeather API for the 7-day forecast and displays the forecast in the HTML. It loops through the forecast data and creates HTML elements for each day, displaying the day of the week, weather icon, and high and low temperatures.

displayTemperature(response)
This function takes the response data from the OpenWeather API for the current weather and displays the weather in the HTML. It displays the city name, temperature, weather icon, description, humidity, wind speed, and date.

search(city)
This function takes a city name as an argument and makes an API call to the OpenWeather API to get the current weather data for that city. It then calls the getCityCoordinates function to get the latitude and longitude coordinates of the city.

getCityCoordinates(city)
This function takes a city name as an argument and makes an API call to the OpenWeather API to get the latitude and longitude coordinates of the city. It then calls the getWeatherData function to get the weather data for the city using the coordinates.

getWeatherData(lat, lon)
This function takes latitude and longitude coordinates as arguments and makes an API call to the OpenWeather API to get the weather data for the location. It then calls the displayForecast function to display the 7-day forecast for the location.

handleSubmit(event)
This function is called when the search button is clicked or the enter key is pressed in the search bar. It prevents the default form submission behavior, gets the value of the search bar, and calls the search function with the city name.

getPosition(position)
This function is called when the default location feature is used. It gets the latitude and longitude coordinates of the user's current location and makes an API call to the OpenWeather API to get the weather data for that location. It then calls the search function with the city name.

defaultWeather(response)
This function is called when the default location feature is used. It gets the name of the city from the response data and calls the search function with the city name.
