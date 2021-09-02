describe('Thermostat', function () {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe('any new instances of thermostat class have temperature set to 20', function () {
    it('temperature is 20 for thermostat instance', function () {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('increase temperature by value of argument passed in', function () {
    it('temperature increases by 10 degrees', function () {
      thermostat.togglePowerSaveMode();
      thermostat.increaseTemperature(10);
      expect(thermostat.temperature).toEqual(30);
    });
  });

  describe('decrease temperature by value of argument passed in', function () {
    it('temperature decreases by 5 degrees', function () {
      thermostat.decreaseTemperature(5);
      expect(thermostat.temperature).toEqual(15);
    });
  });

  describe('minimum temperature', function () {
    it('should not go below 10', function () {
      thermostat.decreaseTemperature(20);
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('max temperature when power saving mode is on', function () {
    it('should not go above 25', function () {
      thermostat.increaseTemperature(50);
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('max temperature when power saving mode is off', function () {
    it('should not go above 32', function () {
      thermostat.togglePowerSaveMode();
      thermostat.increaseTemperature(50);
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('powersaving mode is on by default but can be turned off', function () {
    it('should turn off', function () {
      thermostat.togglePowerSaveMode();
      expect(thermostat.powerSaveMode).toEqual('off');
    });
  });

  describe('function that resets temperature to 20', function () {
    it('changes temperature to 20', function () {
      thermostat.increaseTemperature(70);
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
