class Thermostat {
  constructor() {
    this.minTemperature = 10;
    this.temperature = 20
    this.powerSaveMode = "on"
  }

  increaseTemperature(number) {
    this.temperature += number
    this.checkTemperature()
  }

  decreaseTemperature(number) {
    this.temperature -= number;
    this.checkTemperature();
  }

  checkTemperature(){
    if (this.temperature < this.minTemperature) {this.temperature = 10;}
    else if (this.isPowerSaveModeOn() && this.temperature > 25) {this.temperature = 25}
    else if (!this.isPowerSaveModeOn() && this.temperature > 32) {this.temperature = 32}
  }

  isPowerSaveModeOn() {
    if (this.powerSaveMode === "on") { return true }
    else {return false;}
  }

  togglePowerSaveMode () {
    if (this.powerSaveMode === "off") { this.powerSaveMode = "on" }
    else if (this.powerSaveMode === "on") { this.powerSaveMode = "off" }
  }

  resetTemperature() {
    this.temperature = 20;
  }
}

// completed reset function





