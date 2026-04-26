// taking all value from html 
const citySearch = document.querySelector(".weatherSearch");
const bodyHead = document.querySelector(".bodyHead");
const dateTime = document.querySelector(".dateTime");
const weatherName = document.querySelector(".weatherName");
const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector(".degree");
const minValue = document.querySelector(".minValue");
const maxValue = document.querySelector(".maxValue");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

// get country name in english
const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

// Formate time 
const getTime = (time) => {
    const date = new Date(time * 1000);
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return formatter = new Intl.DateTimeFormat('en-US', option).format(date);
}

// set requered value from api
const setWeatherData = (data) => {
    bodyHead.innerHTML = `${data.name},${getCountryName(data.sys.country)}`;
    dateTime.innerText = `${getTime(data.dt)}`;
    weatherName.innerHTML = data.weather[0].main;
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
    temperature.innerHTML = `${data.main.temp}&deg`;
    minValue.innerHTML = `Min: ${(data.main.temp_min).toFixed()}&deg`;
    maxValue.innerHTML = `Max: ${(data.main.temp_max).toFixed()}&deg`;
    feelsLike.innerHTML = `${(data.main.feels_like).toFixed(2)}&deg`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed}m/s`;
    pressure.innerText = `${data.main.pressure} hPa`;
}

// get the weather detail based on the search 
let city = 'pune';

citySearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName = document.getElementById('inputCity');
    city = cityName.value;
    getWeatherData();
    cityName.value = '';
})

// get weather data from api
const getWeatherData = async () => {
    const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=faa926c5b8b9e0c652e5f5b680e7e930`;
    try {
        const res = await fetch(weatherurl);
        const data = await res.json();
        console.log(data);
        setWeatherData(data);
    } catch (error) {
        console.log(error);
    }
}

// calling function on page load
document.body.addEventListener('load', getWeatherData());
