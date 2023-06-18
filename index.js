function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");

  cityElement.innerHTML = cityInput.value;
  let key = "b56252c34ed3604f2468353a63a1b351";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${key}&units=metric`;

  axios.get(url).then(displayWeather);
}
let searchForm = document.querySelector("#search-form1");
searchForm.addEventListener("click", search);

function displayWeather(response) {
  let weatherSpan = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  weatherSpan.innerHTML = `${temperature}`;
}
