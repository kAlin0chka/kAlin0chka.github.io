const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "09aee54dff3373a3560bb10706394bef"
}
let whenWhere = document.querySelector ('#when-where');
let temperature = document.querySelector ('#temp');
let feelsLike = document.querySelector ('#feelsLike');
let wind = document.querySelector ('#wind');
let humidity = document.querySelector ('#humidity');
const input = document.querySelector ('#input');
input.addEventListener ('keypress', enter) 

function enter (e) {
    if (e.keyCode === 13) {
        getInfo (input.value)
        whenWhere.style.display = "block"
        temperature.style.display = "block"  
        feelsLike.style.display = "block"
        wind.style.display = "block" 
        humidity.style.display = "block"   
    }
}

async function getInfo (data) {
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
    const result = await res.json()
    displayResult(result)
}

function displayResult(result) {
    let city = document.querySelector ("#city")
    city.textContent = `${result.name}, ${result.sys.country}`
    getOurDate ();
    let condition = document.querySelector ("#condition")
    condition.textContent = `${result.weather[0].description}`
    temperature.innerHTML = `${Math.round (result.main.temp)}<span>°</span>`
    feelsLike.innerHTML = `Feels like: <br> ${Math.round(result.main.feels_like)}<span>°</span>`
    wind.innerHTML = `Wind: <br> ${result.wind.speed} m/s`
    humidity.innerHTML = `Humidity: <br> ${result.main.humidity}%`
}

function getOurDate () {
    const myDate = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let day = days [myDate.getDay()]
    let todayDate = myDate.getDate()
    let month = months [myDate.getMonth()]
    let year = myDate.getFullYear()
    let showDate = document.querySelector ('#date')
    showDate.textContent = `${day}`+ ", " + `${todayDate}` + " " + `${month}` + ", " + `${year}`
}


// function solution(year) {
//     return Math.ceil(year / 100)
// }

// const solution = y => Math.ceil(y/100)

// function solution(inputString) {
//     return inputString == inputString.split('').reverse().join('');
// }