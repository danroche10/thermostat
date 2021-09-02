document.addEventListener('DOMContentLoaded', () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
  };

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#increase-temp').addEventListener('click', () => {
    thermostat.increaseTemperature(1);
    document.querySelector('#temperature').innerText = thermostat.temperature;
  });

  document.querySelector('#decrease-temp').addEventListener('click', () => {
    // const thermostat = new Thermostat();
    thermostat.decreaseTemperature(1);
    document.querySelector('#temperature').innerText = thermostat.temperature;
  });
});
