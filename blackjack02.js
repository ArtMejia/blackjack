let player = {
    name: 'Artenio',
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name}: $${player.chips}`

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw another card?'
        console.log(message);
    }   else if (sum === 21) {
        message = 'Woohoo! You"ve got Blackjack'
        console.log(message);
        hasBlackJack = true
    }   else {
        message = 'You"re out of the game!'
        console.log(message);
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
        for (i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }
    sumEl.textContent = 'Sum: ' + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
     if (randomNumber > 10) {
         return 10
     } else if (randomNumber === 1) {
         return 11
     } else {
         return randomNumber
     }
}