class Thermostat {
  constructor() {
    this.MAX_TEMP_ON = 25;
    this.MAX_TEMP_OFF = 32;
    this.TEMP_LOW_ENERGY_USAGE = 18;
    this.TEMP_MEDIUM_ENERGY_USAGE = 25;
    this.MIN_TEMP = 10;
    this.minTemperature = this.MIN_TEMP;
    this.START_TEMP = 20;
    this.temperature = this.START_TEMP;
    this.powerSaveMode = 'on';
  }

  getCurrentTemperature() {
    return fetch('/temperature')
      .then(response => response.json())
  };

  increaseTemperature(number) {
    return fetch('/temperature', {
      method: 'POST',
      body: {temperature: number + 1}
    })
      .then(response => console.log(response.json()));
  }




  // increaseTemperature(number) {
  //   this.temperature += number;
  //   this._checkTemperature();
  // }

  decreaseTemperature(number) {
    this.temperature -= number;
    this._checkTemperature();
  }

  powerSaveModeOn() {
    this.powerSaveMode = 'on';
  }

  powerSaveModeOff() {
    this.powerSaveMode = 'off';
  }

  resetTemperature() {
    this.temperature = this.START_TEMP;
  }

  currentEnergyUsage() {
    if (this.temperature < this.TEMP_LOW_ENERGY_USAGE) {
      return 'low-usage';
    } else if (this.temperature <= this.TEMP_MEDIUM_ENERGY_USAGE) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

  _isPowerSaveModeOn() {
    if (this.powerSaveMode === 'on') {
      return true;
    } else {
      return false;
    }
  }

  _checkTemperature() {
    if (this.temperature < this.minTemperature) {
      this.temperature = this.MIN_TEMP;
    } else if (
      this._isPowerSaveModeOn() &&
      this.temperature > this.MAX_TEMP_ON
    ) {
      this.temperature = this.MAX_TEMP_ON;
    } else if (
      !this._isPowerSaveModeOn() &&
      this.temperature > this.MAX_TEMP_OFF
    ) {
      this.temperature = this.MAX_TEMP_OFF;
    }
  }
}
