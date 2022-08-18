
/*
    1m = 3.281 feet
    1l  = 0.264 gallons
    1kg = 2.204 pounds
*/

let input = document.getElementById("input")
let length = document.getElementById("length-output")
let volume = document.getElementById("volume-output")
let mass = document.getElementById("mass-output")

document.getElementById("btn-convert").addEventListener("click", function() {
    let x = input.value
    
    if(x > 0 && x < 1000) {

        length.innerText = `${x} meters = ${(x*3.281).toLocaleString('en-US', {minimumFractionDigits:3})} feet | ${x} feet = ${(x/3.281).toLocaleString('en-US', {minimumFractionDigits:3})} meters`

        volume.innerText = `${x} litres = ${(x*0.264).toLocaleString('en-US', {minimumFractionDigits:3})} gallons | ${x} gallons = ${(x/0.264).toLocaleString('en-US', {minimumFractionDigits:3})} litres`

        mass.innerText = `${x} kilos = ${(x*2.204).toLocaleString('en-US', {minimumFractionDigits:3})} pounds | ${x} pounds = ${(x/2.204).toLocaleString('en-US', {minimumFractionDigits:3})} kilos`
    }
    else {
        input.value = ""
        length.innerText = "0 meters = 0 feet | 0 feet = 0 meters"
        volume.innerText = "0 litres = 0 gallons | 0 gallons = 0 litres"
        mass.innerText = "0 kilos = 0 pounds | 0 pounds = 0 kilos"
        alert("Enter an integer between 0 and 1000.")
    }
})