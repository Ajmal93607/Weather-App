const apiKey = '280fb9bc599a1cffc47accec5971cac6'; 
const cityInput = document.getElementById('city');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name!');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = `Condition: ${data.weather[0].description}`;
        } else {
            alert('City not found!');
            weatherInfo.innerHTML = '';
        }
    } catch (error) {
        alert('Error fetching weather data!');
    }
}
