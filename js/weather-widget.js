const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const chosenCity = document.querySelector(".city");
const weatherError = document.querySelector(".weather-error");

async function getWeather() {  
  let cityName = 'Minsk';
  chosenCity.value = cityName;
  let savedCityName = localStorage.getItem('city');
  if (savedCityName !== null) {
    cityName = savedCityName;
    chosenCity.value = savedCityName;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${state.language}&appid=ee1b35b18a742a851ea9c3d86068cba0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  if (data.cod !== 200) {
    weatherError.textContent = `Error! City not found for "${cityName}".`;
  } else {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/c`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
  }
}

getWeather();

chosenCity.addEventListener('change', (event) => {
  localStorage.setItem('city', chosenCity.value);
  getWeather();
})
