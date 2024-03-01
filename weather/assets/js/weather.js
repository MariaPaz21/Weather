import { weather_data } from './data.js';

let loadDayForecastData = () => {
    let [guayaquil, ambato, tena] = weather_data
    let { city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, ...other} = guayaquil
    let cityHTML = document.getElementById('city')
    cityHTML.innerHTML = city;

    let dateHTML = document.getElementById('date')
    dateHTML.innerHTML = date

    let maxtempHTML = document.getElementById('maxtemperature')
    maxtempHTML.innerHTML = maxtemperature

    let mintempHTML = document.getElementById('mintemperature')
    mintempHTML.innerHTML = mintemperature

    let cloudHTML = document.getElementById('cloudiness')
    cloudHTML.innerHTML = cloudiness

    let windHTML = document.getElementById('wind')
    windHTML.innerHTML = wind

    let rainHTML = document.getElementById('rainfall')
    rainHTML.innerHTML = rainfall

    let [late, night] = guayaquil.forecast_today

    let lateIconHtml = document.getElementById('late_icon')
    lateIconHtml.innerHTML = late.icon
    
    let latetemphtml = document.getElementById('late_temperature')
    latetemphtml.innerHTML = late.temperature

    let lateforehtml = document.getElementById('late_forecast')
    lateforehtml.innerHTML = late.forecast

    let latetexthtml = document.getElementById('late_text')
    latetexthtml.innerHTML = late.text


    let nightIconHtml = document.getElementById('night_icon')
    nightIconHtml.innerHTML = night.icon

    let nighttemphtml = document.getElementById('night_temperature')
    nighttemphtml.innerHTML = night.temperature

    let nightforehtml = document.getElementById('night_forecast')
    nightforehtml.innerHTML = night.forecast

    let nighttexthtml = document.getElementById('night_text')
    nighttexthtml.innerHTML = night.text

}

let loadWeekForecastData = () => {
	let [guayaquil, ambato, tena] = weather_data
    let week = document.getElementsByClassName('list-group')

    for (let dia of guayaquil.forecast_week) {
        week[0].innerHTML = week[0].innerHTML +
        `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia.text}</h6>
          <span class="text-xs">${dia.date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${dia.temperature.max}</span> |  <span class="text-dark mx-2">${dia.temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia.icon}</i></div>
        </div>
      </li>`
    }
}


loadDayForecastData();
loadWeekForecastData();