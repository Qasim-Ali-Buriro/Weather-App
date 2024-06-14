let key = "3be300f295ee41a717f27e815f3de35f";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const typeCity = document.querySelector(".input"),
    searchBtn = document.querySelector(".search-icon"),
    weather = document.querySelector(".weather-img"),
    degree = document.querySelector(".degree"),
    city = document.querySelector(".city-name"),
    windSpeed = document.querySelector(".wind-speed"),
    humidity = document.querySelector(".humidity"),
    weatherBox = document.querySelector(".weather"),
    error = document.querySelector("p");

async function checkWeather(CityName) {
    let response = await fetch(url + CityName + `&appid=${key}`)
    if (response.status === 404) {
        error.style.display = "block";
        weatherBox.style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);
        city.innerHTML = data.name;
        degree.innerHTML = data.main.temp;
        humidity.innerHTML = data.main.humidity + "%";
        windSpeed.innerHTML = data.wind.speed + "km/h";
        weatherBox.style.display = "flex";
        if (data.weather[0].main == "Clear") {
            weather.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weather.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Rain") {
            weather.src = "images/rain.png"
        }
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(typeCity.value)
})