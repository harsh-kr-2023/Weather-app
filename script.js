const apiKey = '6f79d0f64a9446e9ae670152230708'; // Replace 'YOUR_API_KEY' with your actual API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const cityInput = document.getElementById('city');

getWeatherBtn.addEventListener('click', async () => { // Use async keyword to indicate that this function returns a promise
    const city = cityInput.value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    // Use the correct URL format for the Weather API
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        // Use await keyword to pause the execution until the promise is resolved
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Use the correct properties to access the weather data from the response
        const temperature = data.current.temp_c;
        const weatherDescription = data.current.condition.text;

        weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Weather: ${weatherDescription}</p>`;
    } catch (error) { // Use catch block to handle any errors
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
    }
});
