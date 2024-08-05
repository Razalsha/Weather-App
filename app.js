
const apiKey="1cd8677fba5a26dc2ea0270ad848f55f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector("#search input");
const searchBtn=document.querySelector("#search button");
const weatherIcon=document.querySelector("#weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=data.main.temp;
    document.querySelector("#humidity").innerHTML=data.main.humidity+"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+" km/h";


  if(data.weather[0].main=="Clear"){
    weatherIcon.src="11742559.png";
  }
  else if(data.weather[0].main=="Clouds"){
    weatherIcon.src="clouds.png.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="4724094.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="2930095.png";
  }
  else if (data.weather[0].main=="Stromy"){
    weatherIcon.src="14616985.png";
  }
  
    

 };
 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
























//api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=1cd8677fba5a26dc2ea0270ad848f55f