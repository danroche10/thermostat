document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature
})

const thermostat = new Thermostat();
document.querySelector('#increase-temp').addEventListener('click', () => {
  // const thermostat = new Thermostat();
  thermostat.increaseTemperature(1);
  document.querySelector('#temperature').innerText = thermostat.temperature;
})

