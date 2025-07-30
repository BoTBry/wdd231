const lat = "5.510533097556349";
const lon = "7.040931001940905";
const appid = "175bfc92f43c95f4d8136314d0449a7c";
export const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`;
export const pastMyUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`

export const getWeather = async (url) =>{
    try {
        const getData = await fetch(url);
        if (getData.ok) {
            const con_json = await getData.json();
            console.log(con_json); // testing only
            displayWeather(con_json);
        } 
        else {
            throw Error(await getData.text());
        }
    } 
  catch (error) {
      console.log(error);
  }
}

export async function pastForeCast (pastMyUrl) {
    try {
        const getDate = await fetch(pastMyUrl);
        if (getDate.ok) {
            const con_json = await getDate.json();
            console.log(con_json); // testing only
            displayPastForeCast(con_json);
        }
        else {
            throw Error(await getData.text());
        }
    } 
    
    catch (error) {
        console.log(error);
    }
}

export function displayPastForeCast (data) {
    // list[2].main.temp
    // list[10].main.temp
    const tomorrowCode = "1753920000";
    const tomorrowCodeDate = new Date(tomorrowCode * 1000);
    const tomorrowdayOfWeek = tomorrowCodeDate.toLocaleDateString(`en-US`, {weekday: 'long'});

    const dayAfterTomorrowCode = "1754006400";
    const dayAfterTomorrowDate = new Date(dayAfterTomorrowCode * 1000);
    const dayAfterTomorrowdayOfWeek = dayAfterTomorrowDate.toLocaleDateString(`en-US`, {weekday: 'long'});

    const tomorrow = document.querySelector(".tomorrow");
    const dayAfterTomorrow = document.querySelector(".dayAfterTomorrow");

    tomorrow.innerHTML = `${tomorrowdayOfWeek}: <strong>${data.list[2].main.temp}&deg;F</strong>`;
    dayAfterTomorrow.innerHTML = `${dayAfterTomorrowdayOfWeek}: <strong>${data.list[10].main.temp}&deg;F</strong>`;
}

export function displayWeather (data) {
    const temp = document.querySelector(".temp");
    const weather = document.querySelector(".weather");
    const high = document.querySelector(".high");
    const low = document.querySelector(".low");
    const humidity = document.querySelector(".humidity");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    const weather_img = document.querySelector(".weather_img");
    const today = document.querySelector(".today");

    const sunrise_data = data.sys.sunrise;
    const sunset_data = data.sys.sunset;    

    const sunriseDate = new Date(sunrise_data * 1000);
    const sunsetDate = new Date(sunset_data * 1000);

    temp.innerHTML = `<strong>${data.main.temp}&degF</strong>`;
    today.innerHTML = `Today: <strong>${data.main.temp}&degF</strong>`
    weather.innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    high.innerHTML = `High: ${data.main.temp_max}&deg`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${sunriseDate.toLocaleTimeString()}`;
    sunset.innerHTML = `Sunset: ${sunsetDate.toLocaleTimeString()}`;
    weather_img.setAttribute("src", iconUrl);
    weather_img.setAttribute("alt", data.weather[0].description);
}
