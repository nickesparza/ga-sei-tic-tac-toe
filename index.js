// variable to count turns
let turnCount = 0

// variable to define whose turn it is - true is X, false is O
let xPlayerTurn = true

// capture reset button element
resetButton = document.querySelector('#reset')

// capture container
container = document.querySelector('#container')

// function to mark square, check for a tie, and check for a winner
const markSquare = (event) => {
    // edit innerText with correct symbol
    if (xPlayerTurn === true) {
        // mark an X
        event.target.innerHTML = '<p>X</p>'
    } else if (xPlayerTurn === false) {
        // mark an O
        event.target.innerHTML = '<p>O</p>'
    }

    // remove event listener from square
    console.log(event.target.id)
    event.target.removeEventListener('click', markSquare)
    console.log(`event listener removed`)

    // increment turn
    turnCount += 1
    console.log(turnCount)

    // call function to check for winner
    // YOU CAN CHECK THE INNER HTML OF THE SQUARE'S FIRSTCHILD (THE P TAG)

    // call function to check for ties
 
    // swap player turn if check winner function and check tie function returns false
    if (checkTie() === false) {
        swapPlayer()
    }
}

// function to swap player turns and display current player
const swapPlayer = () => {
    xPlayerTurn = !xPlayerTurn
    if (xPlayerTurn) {
        document.querySelector('#results').innerHTML = `<p>It is the X player's turn</p>`
    } else {
        document.querySelector('#results').innerHTML = `<p>It is the O player's turn</p>`
    }
}

// function to check for ties
const checkTie = () => {
    if (turnCount >= 9) {
        // don't need to lock the board because all squares are already filled
        // turn display to 'it's a tie'
        document.querySelector('#results').innerHTML = `<p>It's a tie!</p>`
    } else {
        console.log(`no tie yet`)
        return false
    }
}

// function to check for winner

// function to lock the game board at the end of the game
const lockBoard = () => {
    for (let i = 0; i < document.querySelectorAll('.square').length; i++) {
        console.log(`I'm locking down ${document.querySelectorAll('.square')[i].id}`)
        document.querySelectorAll('.square')[i].removeEventListener('click', markSquare)
    }
}

// function to initialize a game
const initializeGame = () => {
    // clear all existing content from container
    console.log('the game is afoot')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    // create 9 squares
    for (let i = 0; i < 9; i++) {
        // create a square
        const square = document.createElement('div')
        // add the square class
        square.classList.add('square')
        // add a unique id
        square.id = `square-${i}`
        // push it to the DOM as a child of container
        container.appendChild(square)
        //add event listener for click, to run markSquare function
        square.addEventListener('click', markSquare)
    }
    document.querySelector('#results').innerHTML = `<p>It is the X player's turn</p>`
    turnCount = 0
}

// function to reset the game

// listener on reset button to reset the game
resetButton.addEventListener('click', initializeGame)

// listener to check DOM content and initialize game the first time
document.addEventListener('DOMContentLoaded', () => {
    initializeGame()
})