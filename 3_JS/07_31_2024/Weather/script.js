let formElem = document.querySelector('#weather-form');

formElem.addEventListener("submit", getCityName);

function getCityName(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city");
  let city = cityInput.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41199dfd87640980a3ab51c308fa6cdd`;

  getWeather(url,city);
}

async function getWeather(url,city) {
  let jsonData = await (await fetch(url)).json();

  let temperature = jsonData.main.temp;
  temperature -= 273.15;
  temperature = Math.round(temperature);

  let divAddress = document.querySelector("#weather-info");

  divAddress.innerHTML = `Temperature of ${city}: ${temperature}°C`

  // let feelsLike = jsonData.main.feels_like;
  // divAddress.innerHTML = `Feels Like : ${feelsLike}`
}