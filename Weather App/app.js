const API_KEYS = `6f09fb2172542aabced74f08601cc130`;
const inputData = document.getElementById("inp");
const showWeather = document.getElementById("showweather");

const searchData = async () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=${API_KEYS}&units=metric`;

  showWeather.innerHTML = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;

  try {
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();

    if (response.cod === 200) {
      showData(response);
    } else {
      showWeather.innerHTML = `<div class="alert alert-danger" role="alert">
        City not found. Please try again!
      </div>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    showWeather.innerHTML = `<div class="alert alert-danger" role="alert">
      Something went wrong. Please try again later.
    </div>`;
  }
};

const showData = (data) => {
  showWeather.innerHTML = `<div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      class="card-img-top"
      alt="Weather icon"
    />
    <div class="card-body text-center">
      <h1 class="card-title">${data.name}</h1>
      <h5 class="card-title">${data.main.temp}°C</h5>
      <h5 class="card-title">${data.weather[0].main}</h5>
      <p class="card-text">Humidity: ${data.main.humidity}%</p>
      <p class="card-text">Wind Speed: ${data.wind.speed} m/s</p>
    </div>
  </div>`;
};
