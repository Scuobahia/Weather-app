var api = {
    key: "73cf05e1772b6f32d41c086ccbb12510",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}
var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    console.log(evt);
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults (query) {
    fetch (`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }) .then(displayResults);
}
function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    // var a = moment().toString();
    // document.getElementById('date').innerHTML = a;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector(`.current .weather`);
    weather_el.innerHTML = weather.weather[0].main;
    
    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_min}°F / ${weather.main.temp_max}°F`;

    let wind = document.querySelector('.wind');
    wind.innerHTML = `${weather.wind.speed} <span>MPH</span>`;

    let humidity = document.querySelector('.humidity');
    humidity.innerHTML = `${weather.main.humidity} <span>%</span>`;

    let feel = document.querySelector('.feel');
    feel.innerHTML = `${weather.main.feels_like} <span>°F</span>`;
    // Needs Work
    let uv = document.querySelector('.uv');
    uv.innerHTML = `${weather.main.uvi}`;
}


// var x = document.querySelector('location .date');
// var Now = moment().format('dddd d, MMMM YYYY');
// x.innerHTML = Now;