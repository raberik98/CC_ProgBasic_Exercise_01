let value = document.querySelector("#sensor-value").textContent
let values = []

function saveValue() {
    values.push(value)
    console.log("The list so far: " + values)
}

function addPressure() {
    value = parseInt(value) + 22
    document.querySelector('#sensor-value').textContent = value
}




document.querySelector('#btn-save').addEventListener('click', saveValue)
document.querySelector('#btn-add-pressure').addEventListener('click', addPressure)
