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
  
}