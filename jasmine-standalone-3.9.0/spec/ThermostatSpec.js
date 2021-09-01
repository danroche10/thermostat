describe("Thermostat", function() {
  
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('any new instances of thermostat class have temperature set to 20', function() { 
    it("temperature is 20 for thermostat instance", function() {
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('increaes temperature by value of argument passed in', function() { 
    it("temperature increases by 10 degrees", function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(30)
    })
  })

})