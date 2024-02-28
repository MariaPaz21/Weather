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

    let [element1, element2] = forecast_today
    let {lapse, text, temperature, forecast, icon} = element1
    let {night_lapse, night_text, night_temperature, night_forecast, night_icon} = element2
    console.log(element2)
    let iconhtml = document.getElementById('late_icon')
    iconhtml.innerHTML = icon

    let temphtml = document.getElementById('late_temperature')
    temphtml.innerHTML = temperature

    let forecasthtml = document.getElementById('late_forecast')
    forecasthtml.innerHTML = forecast

    let texthtml = document.getElementById('late_text')
    texthtml.innerHTML = text
    
    let niconHTML = document.getElementById('night_icon')
    niconHTML.innerHTML = night_icon
    


}

let loadWeekForecastData = () => {
	let [guayaquil, ambato, tena] = weather_data
    let {  maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week} = guayaquil
	
    let [day1, day2, day3, day4, day5, day6, day7] = forecast_week
    let {day_2, text2, date2, temperature2, icon2 } = day2
    console.log(day2)
    let text_day2 = document.getElementById('day2_text')
    text_day2.innerHTML = text2

}


loadDayForecastData();
loadWeekForecastData();