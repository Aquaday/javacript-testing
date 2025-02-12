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



let cards = []
let sum = 0
let hasBlackJack = false
let message = ""

let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el") 
let cardEl = document.getElementById("card-el") 


let messageUnder = "Would you like to draw another card?"
let messageWon = "Congratz, you have BlackJack!"
let messageOver = "You lost!!!"

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }   
}

function startGame() {
    isAlive = true
    drawCard()
    drawCard()
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
        if (sum <= 20) {
            message = messageUnder
        }  
        else if (sum === 21) {
            message = messageWon
            hasBlackJack = true
        } 
        else {
            message = messageOver
            isAlive = false
    }
 messageEl.textContent = message
}

function drawCard() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
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


