function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather-main");
      const weather = document.querySelector("#weather-temp");
      city.innerText = data.name;
      const iconCode = data.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      $("#wicon").attr("src", iconUrl);
      $(document).ready(function () {
        $("#test").html("This is Hello World by JQuery");
      });
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find where are you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
