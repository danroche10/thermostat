
let test = fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6b2e036ea921ff6952dc7d6f0aa908b5")
.then(response => response.json())
.then((weatherResponse) => {
  return weatherResponse.main.temp
})
console.log(test);

document.addEventListener('DOMContentLoaded', () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.currentEnergyUsage();
  };
  
  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#increase-temp').addEventListener('click', () => {
    thermostat.increaseTemperature(1);
    updateTemperature();  
  });

  document.querySelector('#decrease-temp').addEventListener('click', () => {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  document.querySelector('#reset-temp').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  })

  document.querySelector('#power-save-mode-on').addEventListener('click', () => {
    thermostat.powerSaveModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#power-save-mode-off').addEventListener('click', () => {
    thermostat.powerSaveModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })
});
