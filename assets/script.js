var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  var userCurrentSearch = document.getElementById("cityInput").value;
  console.log(userCurrentSearch);
  GetInfo(userCurrentSearch);
});
function GetInfo(currentCity) {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    currentCity +
    "&appid=2359370e6cfd687532eeeef2aa190236&units=imperial";
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (i = 0; i < 5; i++) {
        document.getElementById(`day${i + 1}Temp`).innerHTML =
          "Temp:" + data.list[1].main.temp + "°";
      }
      for (a = 0; a < 5; a++) {
        console.log(document.getElementById("day" + (a + 1) + "Humidity"));

        document.getElementById(`day${a + 1}Humidity`).innerHTML =
          "Humidity:" + data.list[1].main.humidity + "%";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "WindSpeed").innerHTML =
          "WindSpeed:" + data.list[1].main.temp_max + "%";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          " http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
    });
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "London";

}
const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 4) {
    return day + d.getDay() - 5;
  } else {
    return day + d.getDay();
  }
}
for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}


const cityName = document.getElementById("cityName");
const listItems = document.getElementById("listItems");
const savedList = [];


function storeCity() {
  localStorage.setItem("cityName", JSON.stringify(savedList))
  cityName = localStorage.getItem("cityName");
}
function renderCity() {

  listItems.innerHTML = "";
  listItemsCountSpan.textContent = listItems.length;

  // Render a new li for each todo
  for (var i = 0; i < savedList.length; i++) {
    var city = savedList[i];
    var li = document.createElement("li");
    li.textContent = city;
    li.setAttribute("data-index", i);
    var button = document.createElement("button");
    button.textContent = "Complete ✔️";
    li.appendChild(button);
    listItems.appendChild(li);
  }
}

function display() {
  console.log("hello");
  var cityInput = document.getElementById("cityInput").value.trim();
  savedList.push(cityInput)
  localStorage.setItem("cityList", JSON.stringify(savedList))


document
  .getElementById("searchBtn")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cityInput = document.getElementById("cityInput").value.trim();

    if (cityInput === "") {
      return;
    }

    savedList.push(cityInput);
    document.getElementById("cityInput").value = "";

    storeCity();
    renderlistItems();
  });

document.getElementById("searchBtn").addEventListener("click", display);

Object.keys(localStorage).forEach((key) => {
console.log(localStorage.getItem(key));
});


var cityList = document.getElementById("cityList");
