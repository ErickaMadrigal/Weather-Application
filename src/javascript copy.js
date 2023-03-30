/// Get date and time

function getTime() {
  let now = new Date();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayMonth = now.getDate();
  let month = now.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let appDate = `${days[day]}, ${dayMonth} ${months[month]} ${hour}:${minutes}`;
  let currentDate = document.querySelector("#date-time");
  currentDate.innerHTML = appDate;
}
getTime();

///Name of the city after searching

function cityName(event) {
  event.preventDefault();
  let cityDisplay = document.querySelector("#search-city");
  if (cityDisplay.value) {
    cityDisplay = cityDisplay.value;
  } else {
    currentCity.innerHTML = null;
    alert("Please type a city");
    currentCity.innerHTML = "Nowhere";
  }
  getLocation(cityDisplay);
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", cityName);

/// Celsius to Farenheit

/*function toFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");
  let fahrenheitTemp = 92;
  temp.innerHTML = fahrenheitTemp;
}*/

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

//let temperature = 20; // Example temperature in Celsius
/*let isCelsius = true; // Track whether temperature is in Celsius or Fahrenheit

function updateTemperature(temperature) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperatureText = Number(temperatureElement.value);
  if (isCelsius) {
    temperatureText = temperatureText;
  } else {
    temperatureText = convertToFahrenheit(temperatureText);
  }
  temperatureElement.innerHTML = temperatureText;
}

function handleCelsiusLinkClick(event) {
  event.preventDefault();
  if (!isCelsius) {
    isCelsius = true;
    updateTemperature();
  }
}

function handleFahrenheitLinkClick(event) {
  event.preventDefault();
  if (isCelsius) {
    isCelsius = false;
    updateTemperature();
  }
}

let celsiusLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");

celsiusLink.addEventListener("click", handleCelsiusLinkClick);
fahrenheitLink.addEventListener("click", handleFahrenheitLinkClick);

updateTemperature(); // Call this once on page load to display the initial temperature

/// Farenheit to Celsius

/*function toCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");
  let celsiusTemp = 33;
  temp.innerHTML = celsiusTemp;
}*/
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", toCelsius);

// API logic below
function getLocation(city) {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "d25cd9cdbd7c9f03325b6cee2badce14";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(url).then(displayWeather);
}

function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = city;
  updateTemperature(temperature);
}
