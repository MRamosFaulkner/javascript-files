// API Key
const apiKey = "c7c2a8d9243b202d426d74897dca99e3";

// HTML Elements
const zip = document.getElementById("zipcode");
const submitInfo = document.getElementById("submit");
const weatherInfo = document.getElementById("weather-info");

// waits on the submit button
submitInfo.addEventListener("click", getWeatherInfo);

// Pull information from site via zip code - date, temp, sunny or cloudy
function getWeatherInfo() {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${apiKey}&units=imperial`;

  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      const city = data.name;
      const date = new Date(data.dt * 1000).toLocaleDateString();
      const tempHigh = data.main.temp_max;
      const tempLow = data.main.temp_min;
      const description = data.weather[0].description;
      const currentTemp = data.main.temp;

      // output in web
      weatherInfo.innerHTML = `
        <h3>${city} Weather</h3>
        <h1>${currentTemp}</h1>
        <p>${date}</p>
        <p>H: ${tempHigh}&deg;F</p> 
        <p>L: ${tempLow}&deg;F</p>
        <p>Currently: ${description}</p>
      `;
    })
    .catch((error) => console.log(error));
}
