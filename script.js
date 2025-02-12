console.log('Hello!');

let numberPage = document.getElementById("number")

let count = 0

function addOne() {
    count += 1
    numberPage.textContent = count
}


let saveText = document.getElementById("savesPrev")

function save() {
    saveText.textContent += count + " - "
    numberPage.textContent = 0
    count = 0
}



let card1 = 10
let card2 = 10
let cards = [card1, card2]
let sum = card1 + card2
let isAlive = true
let hasBlackJack = false
let message = ""

let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el") 
let cardEl = document.getElementById("card-el") 


let messageUnder = "Would you like to draw another card?"
let messageWon = "Congratz, you have BlackJack!"
let messageOver = "You lost!!!"


function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
    message = messageUnder
} else if (sum === 21) {
    message = messageWon
    hasBlackJack = true
} else {
    message = messageOver
    isAlive = false
}
 messageEl.textContent = message
}

function drawCard() {
    console.log("drawing Card")
    let newCard = 2
    sum += newCard
    cards.push(newCard)
    startGame()
}



// let cardsss = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run

// for (let i = 0; i < cardsss.length; i += 1) {
//     console.log(cardsss[i])
// }

// let tall = [1, 5, 4, 8, 2, 4, 6]

// for (let i = 0; i < tall.length; i += 1) {
//     console.log(tall[i])
// }


