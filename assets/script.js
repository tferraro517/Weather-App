// get api weather url
// fetch element
// json
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=2359370e6cfd687532eeeef2aa190236";

function GetInfo(){
  const newName= document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML ="--"+newName.value+"--"

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  console.log(data);
  for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[1].main.temp_main -275.69).toFixed(1)+"°";
  }
    for(i=0;i<5;i++){
      document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[1].main.temp_main -275.89).toFixed(1)+"°";
  }
  for(i=0;i<5;i++){
    document.getElementById("img" +(i+1)).src =" http://openweathermap.org/img/wn/"+ data.list [i].weather[0].icon+".png";
  }

})

.catch(() => alert ("something went wrong"))
}



function DefaultScreen(){
  document.getElementById("cityInput").defaultValue ="London";
  GetInfo();
}
const d =new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function CheckDay(day){
  if(day +d.getDay() > 4){
    return day +d. getDay() -5;
  }
  else{
    return day +d.getDay();
  }
}
for(i=0;i<5;i++){
  document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}