let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = (cTemp * 9) / 5 + 32;
  return Math.round(cToFahr);
}

let cityName = prompt("Enter a city name");
cityName = cityName.toLowerCase();
cityName = cityName.trim();
//weather[cityName].temp = Math.round(weather[cityName].temp);

if (weather[cityName] !== undefined) {
  alert(
    `It is currently ${Math.round(weather[cityName].temp)}°C (${cToF(
      weather[cityName].temp
    )}°F) in ${cityName} with a humidity of ${weather[cityName].humidity}%`
  );
} else {
  let a = document.createElement("a");
  a.target = "_blank";
  a.href = "https://www.google.com/search?q=weather+" + cityName;
  if (
    window.confirm(
      "Sorry, we don't know the weather for this city, Click OK to look it up on Google or Cancel to Stay here"
    )
  ) {
    a.click();
  }
}
