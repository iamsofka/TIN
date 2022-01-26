const tc = require('./temperatureConverter')
const dc = require('./distanceConverter')

const temperatureSelect1 = document.getElementById("temperatureSelect1")
const temperatureSelect2 = document.getElementById("temperatureSelect2")
const temperatureInput1 = document.getElementById("temperatureInput1")
const temperatureInput2 = document.getElementById("temperatureInput2")

const distanceSelect1 = document.getElementById("distanceSelect1")
const distanceSelect2 = document.getElementById("distanceSelect2")
const distanceInput1 = document.getElementById("distanceInput1")
const distanceInput2 = document.getElementById("distanceInput2")

window.onTemperatureButtonClicked = function() {
    if (temperatureInput1.value === "") return
    temperatureInput2.value = tc.calculate(temperatureSelect1.value, temperatureSelect2.value, temperatureInput1.value)
}

window.onDistanceButtonClicked = function() {
    if (distanceInput1.value === "") return
    distanceInput2.value = dc.calculate(distanceSelect1.value, distanceSelect2.value, distanceInput1.value)
}