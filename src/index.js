function refreshWeather(response) {
  let temperatureElement = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "f91o7at26fc6a5a0df4bb1a219423ab4";
  let apiURL =
    'https://api.shecodes.io/weather/vl/current?query=${city}&key=$(apiKey}$units=metric"';
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  seachCity(searchInput, value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
