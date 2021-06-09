var api = {
    key: "73cf05e1772b6f32d41c086ccbb12510",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

var uvDataEl = document.getElementById('uvi');
var API_KEY = "73cf05e1772b6f32d41c086ccbb12510";

function getWeatherData(weather) {
  
        console.log(weather);
        let latitude = weather.coord.lat;
        let longitude = weather.coord.lon;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=hourly,minutely&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.current.uvi)
                let uv = document.querySelector('#uvi');
                uv.innerHTML = `${data.current.uvi}`
                console.log(data)
                // Day 1
                let temp2 = document.querySelector('.current-2 .temp-2');
                temp2.innerHTML = `${Math.round(data.daily[1].temp.day)} <span>°F</span>`;

                let now2 = document.querySelector('.current-2 .now-2');
                now2.innerHTML = `${data.daily[1].weather[0].main}`

                let feel2 = document.querySelector('.current-2 .feel-2');
                feel2.innerHTML = `${Math.round(data.daily[1].feels_like.day)} <span>°F</span>`;

                let humid2 = document.querySelector('.current-2 .humid-2');
                humid2.innerHTML = `${data.daily[1].humidity}<span>%</span>`
                
                let uvi2 = document.querySelector('.current-2 .uvi-2');
                uvi2.innerHTML = `${data.daily[1].uvi}`;
                // Day 2
                let temp3 = document.querySelector('.current-3 .temp-3');
                temp3.innerHTML = `${Math.round(data.daily[2].temp.day)} <span>°F</span>`;

                let now3 = document.querySelector('.current-3 .now-3');
                now3.innerHTML = `${data.daily[2].weather[0].main}`

                let feel3 = document.querySelector('.current-3 .feel-3');
                feel3.innerHTML = `${Math.round(data.daily[2].feels_like.day)} <span>°F</span>`;

                let humid3 = document.querySelector('.current-3 .humid-3');
                humid3.innerHTML = `${data.daily[2].humidity}<span>%</span>`
                
                let uvi3 = document.querySelector('.current-3 .uvi-3');
                uvi3.innerHTML = `${data.daily[2].uvi}`;
            })
}
var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
function setQuery(evt) {

    console.log(evt);
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(function (weather) {
            getWeatherData(weather)
            console.log("hello")
            displayResults(weather)
        });
}
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    var a = moment().format('dddd d, MMMM YYYY').toString();
    document.getElementById('date').innerHTML = a;
    console.log(moment);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector(`.current .weather`);
    weather_el.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;

    let wind = document.querySelector('.wind');
    wind.innerHTML = `${Math.round(weather.wind.speed)} <span>MPH</span>`;

    let humidity = document.querySelector('.humidity');
    humidity.innerHTML = `${weather.main.humidity} <span>%</span>`;

    let feel = document.querySelector('.feel');
    feel.innerHTML = `${Math.round(weather.main.feels_like)} <span>°F</span>`;

   
}