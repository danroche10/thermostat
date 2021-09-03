class WeatherApi{
  // constructor(){
  //   self.DEFAULT_CITY = "London"
  //   self.city = DEFAULT_CITY;
  // }

  updateWeather(city){
    self.apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed";
    return fetch(self.apiUrl)
    .then(response => response.json())
    .then((weatherResponse) => {
      document.querySelector('#cityWeather').innerText = city + ": " + weatherResponse.main.temp.toString() + "C";
      return weatherResponse.main.temp;
    })
  }

}