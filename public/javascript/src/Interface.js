document.addEventListener('DOMContentLoaded', () => {
  const updateTemperature = () => {
    async function result() {
      const result = await thermostat.getCurrentTemperature();
      document.querySelector('#temperature').innerText = result.temperature;
      document.querySelector('#temperature').className = await thermostat.currentEnergyUsage();
    }
    result();
  };
    const thermostat = new Thermostat();
    const weatherApi = new WeatherApi();
    weatherApi.updateWeather(document.querySelector('#cityInput').value);
    updateTemperature();

  document.querySelector('#cityInput').addEventListener('change', () => {
    weatherApi.updateWeather(document.querySelector('#cityInput').value);
  });

  document.querySelector('#increase-temp').addEventListener('click', () => {
    async function result() {
      await thermostat.increaseTemperature(1);
      updateTemperature();  
    }
    result();
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
