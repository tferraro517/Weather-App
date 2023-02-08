// get api weather url
// fetch element
// json
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
  // GetInfo();
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
// dynamically put in local storage items
// saved or list variable
// saved list start empty
//use local storage set item to push new local storage item into array
// if statement
//display array in container on html

const cityName = document.getElementById("cityName");
const listItems = document.getElementById("listItems");
const savedList = [cityName, listItems];

function storeCity() {
  localStorage.setItem("cityName", JSON.stringify(savedList));
}
function renderCity() {
  // Clear todoList element and update todoCountSpan
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
  var setCity = localStorage.getItem("cityName", JSON.parse(savedList));
  // renderMessage();
  document.getElementById("cityName").innerHTML = setCity;
}

document
  .getElementById("searchBtn")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cityInput = document.getElementById("cityInput").value.trim();

    // Return from function early if submitted todoText is blank
    if (cityInput === "") {
      return;
    }

    // Add new todoText to todos array, clear the input
    savedList.push(cityInput);
    document.getElementById("cityInput").value = "";

    // Store updated todos in localStorage, re-render the list
    storeCity();
    renderlistItems();
  });

document.getElementById("searchBtn").addEventListener("click", display());
// }
// console.log("hello");

// var cityName = JSON.parse(localStorage())
