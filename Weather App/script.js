const apiKey = '4697c407d4c7456315ad99cb7d0e7221';
const searchInput = document.getElementById('input-text');
const searchButton = document.getElementById("btn");
const weatherResult = document.getElementById("weatherResult");

searchButton.addEventListener('click', () => {
    const city = searchInput.value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(output => {
            if(!output.ok){
                alert('Enter the correct location name');
                return;
            }
            return output.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            weatherResult.innerHTML = weatherInfo;
            weatherResult.innerHTML = weatherInfo;
            searchInput.value = '';
        })
        .catch(function (error) {
            console.log("Error fetching weather data", error);
            weatherResult.innerHTML = '<p> Failed to fetch weather data. Please try again later.</p>';
        });
}
