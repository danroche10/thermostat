require 'sinatra/base'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base
  get "/" do
    File.read('public/index.html')
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temperature }.to_json
  end

  post "/temperature" do
    thermostat = Thermostat.instance
    updated_tempearture = JSON.parse(request.body.read)["temperature"]
    thermostat.update(updated_tempearture)
    { status: 200 }.to_json
  end

  run! if app_file == $0
end