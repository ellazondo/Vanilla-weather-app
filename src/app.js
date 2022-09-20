function conversionC(event) {
  event.preventDefault();
  let tempClickC = document.querySelector("#temp-click");
  tempClickC.innerHTML = 26;
}

let tempC = document.querySelector("#temp-c");
tempC.addEventListener("click", conversionC);

function conversionF(event) {
  event.preventDefault();
  let tempClickF = document.querySelector("#temp-click");
  tempClickF.innerHTML = 80;
}

let tempF = document.querySelector("#temp-c");
tempF.addEventListener("click", conversionF);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuersday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let date = document.querySelector("h3");
date.innerHTML = `${day} ${hours}:${minutes}`;

function citySearch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#search-city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);
