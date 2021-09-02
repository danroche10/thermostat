class Thermostat {
  constructor() {
    this.MAX_TEMP_ON = 25;
    this.MAX_TEMP_OFF = 32;
    this.MIN_TEMP = 10;
    this.minTemperature = this.MIN_TEMP;
    this.START_TEMP = 20;
    this.temperature = this.START_TEMP;
    this.powerSaveMode = 'on';
  }

  increaseTemperature(number) {
    this.temperature += number;
    this._checkTemperature();
  }

  decreaseTemperature(number) {
    this.temperature -= number;
    this._checkTemperature();
  }

  togglePowerSaveMode() {
    if (this.powerSaveMode === 'off') {
      this.powerSaveMode = 'on';
    } else if (this.powerSaveMode === 'on') {
      this.powerSaveMode = 'off';
    }
  }

  resetTemperature() {
    this.temperature = this.START_TEMP;
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
