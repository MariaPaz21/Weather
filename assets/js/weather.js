import { weather_data } from './data.js';

function CiudadTraer(ciudad) { 
    let ciudadinfo;
    weather_data.forEach(function (objeto) {
        if (objeto.city === ciudad) { ciudadinfo = objeto; }
    });
    return ciudadinfo;
}

let loadDayForecastData = (ciudad) => {
    let infoCity = CiudadTraer(ciudad);

    let cityHTML = document.getElementById('city');
    cityHTML.innerHTML = infoCity.city;

    let datehtml = document.getElementById('date');
    datehtml.innerHTML = infoCity.date;

    let tempmaxhtml = document.getElementById('maxtemperature');
    tempmaxhtml.innerHTML = infoCity.maxtemperature;

    let tempminhtml = document.getElementById('mintemperature');
    tempminhtml.innerHTML = infoCity.mintemperature;

    let cloudhtml = document.getElementById('cloudiness');
    cloudhtml.innerHTML = infoCity.cloudiness;

    let windhtml = document.getElementById('wind');
    windhtml.innerHTML= infoCity.wind;

    let rainhtml = document.getElementById('rainfall');
    rainhtml.innerHTML = infoCity.rainfall;

    let [late, night] = infoCity.forecast_today;

    let late_iconhtml = document.getElementById('late_icon');
    late_iconhtml.innerHTML = late.icon;
    
    let late_temphtml = document.getElementById('late_temperature');
    late_temphtml.innerHTML = late.temperature;

    let late_forecasthtml = document.getElementById('late_forecast');
    late_forecasthtml.innerHTML = late.forecast;

    let late_txthtml = document.getElementById('late_text');
    late_txthtml.innerHTML = late.text;


    let night_iconhtml = document.getElementById('night_icon');
    night_iconhtml.innerHTML = night.icon;

    let night_temphtml = document.getElementById('night_temperature');
    night_temphtml.innerHTML = night.temperature;

    let night_forecasthtml = document.getElementById('night_forecast');
    night_forecasthtml.innerHTML = night.forecast;

    let night_txthtml = document.getElementById('night_text');
    night_txthtml.innerHTML = night.text;
}

let loadWeekForecastData = (ciudad) => {
    let week = document.getElementsByClassName("list-group")[0];
    let infoCity = CiudadTraer(ciudad);

    week.innerHTML = "";

    for (let day of infoCity.forecast_week) {
        week.innerHTML += `
            <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${day.text}</h6>
                    <span class="text-xs">${day.date}</span>
                </div>
                <div class="d-flex align-items-center ">
                    <span class="font-weight-bold text-dark mx-2">${day.temperature.max}</span> |  <span class="text-dark mx-2">${day.temperature.min}</span>
                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${day.icon}</i></div>
                </div>
            </li>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let cities = document.getElementById("dropdownMenuButton");

    while (cities.firstChild) {
        cities.removeChild(cities.firstChild);
    }

    for (let i = 0; i < weather_data.length; i++) {
        let choice = new Option(weather_data[i].city, weather_data[i].city);
        cities.add(choice);
    }

    let cargarbtn = document.getElementById("loadinfo");

    cargarbtn.addEventListener("click", () => {
        let ciudad = cities.value;
        loadWeekForecastData(ciudad);
        loadDayForecastData(ciudad);
    });

    cities.addEventListener("change", () => {
        let ciudad = cities.value;
        loadWeekForecastData(ciudad);
        loadDayForecastData(ciudad);
    });
});