
/*
    1m = 3.281 feet
    1l  = 0.264 gallons
    1kg = 2.204 pounds
*/

const input = document.getElementById("input")
let length = document.getElementById("length-output")
let volume = document.getElementById("volume-output")
let mass = document.getElementById("mass-output")

document.getElementById("btn-convert").addEventListener("click", function() {
    let x = input.value
    
    if(x > 0) {

        length.innerText = `${x} meters = ${(x*3.281).toFixed(3)} feet | ${x} feet = ${(x/3.281).toFixed(3)} meters`

        volume.innerText = `${x} litres = ${(x*0.264).toFixed(3)} gallons | ${x} gallons = ${(x/0.264).toFixed(3)} litres`

        mass.innerText = `${x} kilos = ${(x*2.204).toFixed(3)} pounds | ${x} pounds = ${(x/2.204).toFixed(3)} kilos`
    }
    else {
        length.innerText = "0 meters = 0 feet | 0 feet = 0 meters"
        volume.innerText = "0 litres = 0 gallons | 0 gallons = 0 litres"
        mass.innerText = "0 kilos = 0 pounds | 0 pounds = 0 kilos"
    }
})