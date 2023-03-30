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
    cityDisplay.innerHTML = null;
    alert("Please type a city");
    cityDisplay.innerHTML = "Nowhere";
  }
  getLocation(cityDisplay);
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", cityName);

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
}

function error(error) {
  console.error("Error fetching weather data:", error);
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "d25cd9cdbd7c9f03325b6cee2badce14";
  let units = "metric";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=${units}`
    )
    .then(displayWeather)
    .catch(handleError);
}

function handleError(error) {
  console.error(error);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(getPosition);
});
