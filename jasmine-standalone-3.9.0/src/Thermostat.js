class Thermostat {
  constructor() {
    // this.startTemperature = 20;
    this.minTemperature = 10;
    this.temperature = 20
  }

  increaseTemperature(number) {
    this.temperature += number
  }

  decreaseTemperature(number) {
    this.temperature -= number;
    this.checkTemperature()
  }

  checkTemperature(){
    if (this.temperature < this.minTemperature) {this.temperature = 10;}
  }

}





