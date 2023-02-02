let greeting=document.getElementById("greeting");
let userLocation=document.getElementById("location");
let timeEl=document.getElementById("time");
let temperature=document.getElementById("temperature");
let humidity=document.getElementById("humidity");
let prediction=document.getElementById("prediction");
const dateToday= new Date();
let AMPM=document.getElementById("AMPM");
let hours=dateToday.getHours();
let mins=dateToday.getMinutes();
let sec=dateToday.getSeconds();
//-----------------------------------------------------------------------------------------------------------------------------------//

const timeUpdate=()=>{
    if(sec<59){
        sec++;
    }
    else{
        sec=0;
        mins++;
    }
    if(mins==60){
        mins=0;
        hours++;
    }
    if(hours>12){
       hours=hours-12;
       AMPM.innerText="PM";
    }
    timeEl.innerText="Time:"+hours+":"+mins+":"+sec;
}
setInterval(timeUpdate,1000);

//----------------------------------------------------------------------------------------------------------------------------------//

const getWeatherData= async ()=>{
  const response= await fetch("https://api.open-meteo.com/v1/forecast?latitude=26.84&longitude=80.92&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
  const jsonData= await response.json();
  const temperatureData= jsonData.current_weather.temperature;
  const weatherCode=jsonData.current_weather.weathercode;
  temperature.innerText="Temperature : " + temperatureData +"°C";
  
  switch(weatherCode){
    case 0:
      prediction.innerText="Prediction: Clear Sky!";
      break;
    case 1:
      prediction.innerText="Prediction: : 	Mainly clear, partly cloudy, and overcast";
      break;
    case 2:
      prediction.innerText="Prediction: : 	Mainly clear, partly cloudy, and overcast";
      break;
    case 3:
      prediction.innerText="Prediction: : 	Mainly clear, partly cloudy, and overcast";
      break;
    case 45:
      prediction.innerText="Prediction:  	Fog and depositing rime fog";
      break;
    case 48:
      prediction.innerText="Prediction:  	Fog and depositing rime fog";
      break;
    case 51:
      prediction.innerText="Prediction: Drizzle: Light, moderate, and dense intensity!";
      break;
    case 53:
      prediction.innerText="Prediction: Drizzle: Light, moderate, and dense intensity";
      break;
    case 55:
      prediction.innerText="Prediction: Drizzle: Light, moderate, and dense intensity";
      break;
    case 56:
      prediction.innerText="Prediction: Freezing Drizzle: Light and dense intensity";
      break;
    case 57:
      prediction.innerText="Prediction: Freezing Drizzle: Light and dense intensity";
      break;
    case 61:
      prediction.innerText="Prediction: Rain: Slight, moderate and heavy intensity";
      break;
    case 63:
      prediction.innerText="Prediction: Rain: Slight, moderate and heavy intensity";
      break;
    case 65:
      prediction.innerText="Prediction: Rain: Slight, moderate and heavy intensity";
      break;
    case 66:
      prediction.innerText="Prediction: Freezing Rain: Light and heavy intensity";
      break;
    case 67:
      prediction.innerText="Prediction: Freezing Rain: Light and heavy intensity";
      break;
    case 80:
      prediction.innerText="Prediction: Rain showers: Slight, moderate, and violent";
      break;
    case 81:
      prediction.innerText="Prediction: Rain showers: Slight, moderate, and violent";
      break;
    case 82:
      prediction.innerText="Prediction: Rain showers: Slight, moderate, and violent";
      break;
    default:
        prediction.innerText="Prediction: Unable to load Prediction";
  }

}
getWeatherData();

const greetingUpdate=()=>{
   if (hours>=12&&hours<=17){
    greeting.innerText="Good Afternoon!";
    document.body.style.backgroundImage=`url("june-o-R3edrJmLvJQ-unsplash.jpg")`;
   }
   else if(hours>17&&hours<=21){
    greeting.innerText="Good Evening!";
    document.body.style.backgroundImage=`url("freestocks-ebZUZ1MiVnU-unsplash.jpg")`;
   }
   else if(hours>21){
    greeting.innerText="Good Night!"
    document.body.style.backgroundImage=`url("jonathan-barreto-EkjHd-r_jF0-unsplash.jpg")`;
   }
   else if(hours<=4){
    greeting.innerText="Good Night!"
    document.body.style.backgroundImage=`url("aqil-zufar-W1_oJUCoycM-unsplash.jpg")`;
   }
   
}
greetingUpdate();
