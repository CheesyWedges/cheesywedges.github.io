
let count = 0
let countPeople = document.getElementById("count-people")
let msg = document.getElementById("save-msg")

function increment() {
    count += 1
    countPeople.innerText = count
}

function save() {
    msg.textContent += count + " - "
    count = 0
    countPeople.innerText = count
}

function reset() {
    count = 0
    countPeople.innerText = count
    msg.innerText = "Previous entries: "
}