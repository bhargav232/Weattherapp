require('dotenv').config();
const apiKey = process.env.API_KEY;
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function  checkWeather() {

    const city = document.getElementById("cityInput").value;


   
        const response = await fetch(apiUrl + `${city}&appid=${apiKey}&units=metric`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
            return;
        }
       else{
        const data = await response.json();
        console.log(data)
        // var sunriseTimestamp = data.sys.sunrise
        // console.log(sunriseTimestamp)
        // var sunriseDate = new Date(sunriseTimestamp * 1000);
        // var sunriseTimeString = sunriseDate.toUTCString();
        // console.log(sunriseTimeString)


        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name + "," +  data.sys.country;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      //  document.querySelector(".sunrise").innerHTML = sunriseTimeString 


        const weatherCondition = data.weather[0].main;
        switch (weatherCondition) {
            case "Clouds":
                document.querySelector('.weather-icon').src = "images/clouds.png";
                break;
            case "Clear":
                document.querySelector('.weather-icon').src = "images/clear.png";
                break;
            case "Rain":
                document.querySelector('.weather-icon').src = "images/rain.png";
                break;
            case "Drizzle":
                document.querySelector('.weather-icon').src = "images/drizzle.png";
                break;
            case "Mist":
                document.querySelector('.weather-icon').src = "images/mist.png";
                break;
            default:
                break;
        }
    }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    

}



