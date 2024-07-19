// app.js
document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = '34e4b18eb72e69521068f6e8d13f30aa'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.querySelector('.weather-result').style.display = 'block';
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('weather-description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.error('Error:', error));
}
