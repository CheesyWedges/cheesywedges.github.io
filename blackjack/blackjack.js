let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let userMsg = document.getElementById("msg")
let userTotal = document.getElementById("total")
let userCards = document.getElementById("cards")

let player = {
    name: "Lord Voldemort",
    chips: 0
}

let userDetails = document.getElementById("user")
userDetails.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    
    renderGame()
}
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    userMsg.textContent = message
    userTotal.textContent = "Sum: " + sum
    userCards.textContent = "Cards: " 
        for(let i=0; i<cards.length; i++) {
            userCards.textContent += cards[i] + " "
        }
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        message = "Drawing a new card from the deck."
        userMsg.textContent = message

        let newCard = getRandomCard()
        sum += newCard

        cards.push(newCard)

        renderGame()
    }
}

function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13 ) + 1

    if (randomNum === 1 ) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}