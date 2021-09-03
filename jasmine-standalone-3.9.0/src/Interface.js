


document.addEventListener('DOMContentLoaded', () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.currentEnergyUsage();
  };
  
  const thermostat = new Thermostat();
  const weatherApi = new WeatherApi("London");
  weatherApi.updateWeather();
 
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
