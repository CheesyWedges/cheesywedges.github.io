// Grab the emojiContainer div and store it in a variable. Log it to the console

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const container = document.getElementById("emoji-container")
const input = document.getElementById("emoji-input")
const btnPush = document.getElementById("push-btn")
const btnUnshift = document.getElementById("unshift-btn")
const btnPop = document.getElementById("pop-btn")
const btnShift = document.getElementById("shift-btn")

//DISPLAY THE EMOJIS INSIDE THE DIV

//Method 1:
/*
let emoji = ""

for (let i = 0; i < myEmojis.length; i++) {
    emoji += `<span> ${myEmojis[i]} </span>`
}
container.innerHTML = emoji
*/

//Method 2
function renderEmojis() {
    container.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const span = document.createElement("span")
        span.textContent = myEmojis[i]
        container.append(span)
    }
}
renderEmojis()

// ADD EVENT LISTENER TO BUTTONS

btnPush.addEventListener("click", function() {
    if(input.value) {
        myEmojis.push(input.value)
        input.value = ""
        renderEmojis()
    }
})

btnUnshift.addEventListener("click", function() {
    
    if(input.value) {
        myEmojis.unshift(input.value)
        input.value = ""
        renderEmojis()
    }
})

btnPop.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

btnShift.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})