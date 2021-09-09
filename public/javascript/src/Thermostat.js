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

  async updateTemperature(temp_change) {
    let current_temp = await this.getCurrentTemperature();
    current_temp.temperature += temp_change

    fetch('/temperature', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "temperature": current_temp.temperature 
      })
    });
}
  increaseTemperature(temp_change) {
    this.updateTemperature(temp_change);
    this._checkTemperature();
}

  decreaseTemperature(temp_change) {
    let temp_decrease = temp_change*-1
    this.updateTemperature(temp_decrease);
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

  async currentEnergyUsage() {
    let current_temp = await this.getCurrentTemperature();
    if (current_temp.temperature < this.TEMP_LOW_ENERGY_USAGE) {
      return 'low-usage';
    } else if (current_temp.temperature <= this.TEMP_MEDIUM_ENERGY_USAGE) {
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
