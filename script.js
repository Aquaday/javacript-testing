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
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + card1 + " " + card2
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