
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let output1 = document.getElementById("pwd1")
let output2 = document.getElementById("pwd2")
let length = document.getElementById("range")
let pwd = ""
let text1 = document.getElementById("pwd1-text")
let text2 = document.getElementById("pwd2-text")

function generatePasswords() {
    generatePassword()
    output1.innerText = pwd
    text1.innerText = ""
    generatePassword()
    output2.innerText = pwd
    text2.innerText = ""
}

function generatePassword() {
    pwd =  ""

    for(let i = 0; i < length.value; i++) {
        let randomNum = Math.floor(Math.random()*characters.length)
        pwd += characters[randomNum]
    }
}

//THESE WORK ON FIREFIRE ONLY. NEED TO FIX.
function copyPassword() {

  let pass1 = document.getElementById("pwd1").innerText

  navigator.clipboard.writeText(pass1)
    .then(() => {
      text1.innerText = "Copied to clipboard"
    })
    .catch((err) => {
      text1.innerText = err.message
    })
}

function copyPassword2() {

  let pass2 = document.getElementById("pwd2").innerText

  navigator.clipboard.writeText(pass2)
    .then(() => {
      text2.innerText = "Copied to clipboard"
    })
    .catch((err) => {
      text2.innerText = err.message
    })
}