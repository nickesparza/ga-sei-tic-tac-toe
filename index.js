// variable to count turns
let turnCount = 0

// variable to define whose turn it is - true is X, false is O
let xPlayerTurn = true
let playerDisplay = `X`

// initialize win counters
oWinCount = 0
xWinCount = 0

// capture reset button element
resetButton = document.querySelector('#reset')

// capture container
container = document.querySelector('#container')

// capture win tracker element
winTracker = document.querySelector('#winTracker')

// function to mark square, check for a tie, and check for a winner
const markSquare = (event) => {
    // add 'clicked' class to target
    event.target.classList.add('clicked')
    // remove 'unclicked' class from target
    event.target.classList.remove('unclicked')
    // edit innerText with correct symbol
    if (xPlayerTurn === true) {
        // mark an X
        event.target.innerHTML = `<p class="markerX">${playerDisplay}</p>`
    } else if (xPlayerTurn === false) {
        // mark an O
        event.target.innerHTML = `<p class="markerO">${playerDisplay}</p>`
    }

    // remove event listener from square
    // console.log(event.target.id)
    event.target.removeEventListener('click', markSquare)
    // console.log(`event listener removed`)

    // increment turn
    turnCount += 1

    // console.log(turnCount)

    // call function to check for winner
    // YOU CAN CHECK THE INNER HTML OF THE SQUARE'S FIRSTCHILD (THE P TAG)

    // call function to check for ties
 
    // swap player turn if check winner function and check tie function returns false
    if (checkWinner() === false && checkTie() === false) {
        // console.log(`no winners or ties yet`)
        swapPlayer()
    }
}

// function to swap player turns and display current player
const swapPlayer = () => {
    xPlayerTurn = !xPlayerTurn
    if (xPlayerTurn) {
        playerDisplay = 'X'
        document.querySelector('#results').innerHTML = `<p>It is the ${playerDisplay} player's turn</p>`
    } else {
        playerDisplay = 'O'
        document.querySelector('#results').innerHTML = `<p>It is the ${playerDisplay} player's turn</p>`
        
    }
}

// function to check for ties
const checkTie = () => {
    if (turnCount >= 9) {
        // don't need to lock the board because all squares are already filled
        // turn display to 'it's a tie'
        document.querySelector('#results').innerHTML = `<p>It's a tie!</p>`
    } else {
        return false
    }
}

// function to check for winner
const checkWinner = () => {
    // check column 1
    if (document.querySelector('#square-0').innerHTML === document.querySelector('#square-3').innerHTML &&
        document.querySelector('#square-0').innerHTML === document.querySelector('#square-6').innerHTML) {
            lockBoard()
            document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
            trackWins()
        // check column 2
        } else if (document.querySelector('#square-1').innerHTML === document.querySelector('#square-4').innerHTML &&
                document.querySelector('#square-1').innerHTML === document.querySelector('#square-7').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check column 3
        } else if (document.querySelector('#square-2').innerHTML === document.querySelector('#square-5').innerHTML &&
                document.querySelector('#square-2').innerHTML === document.querySelector('#square-8').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check top row
        } else if (document.querySelector('#square-0').innerHTML === document.querySelector('#square-1').innerHTML &&
                document.querySelector('#square-0').innerHTML === document.querySelector('#square-2').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check middle row
        } else if (document.querySelector('#square-3').innerHTML === document.querySelector('#square-4').innerHTML &&
                document.querySelector('#square-3').innerHTML === document.querySelector('#square-5').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check bottom row
        } else if (document.querySelector('#square-6').innerHTML === document.querySelector('#square-7').innerHTML &&
                document.querySelector('#square-6').innerHTML === document.querySelector('#square-8').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check top-left-to-bottom-right diagonal
        } else if (document.querySelector('#square-0').innerHTML === document.querySelector('#square-4').innerHTML &&
                document.querySelector('#square-0').innerHTML === document.querySelector('#square-8').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        // check bottom-left-to-top-right diagonal
        } else if (document.querySelector('#square-6').innerHTML === document.querySelector('#square-4').innerHTML &&
                document.querySelector('#square-6').innerHTML === document.querySelector('#square-2').innerHTML) {
                    lockBoard()
                    document.querySelector('#results').innerHTML = `<p>${playerDisplay} wins!</p>`
                    trackWins()
        } else {
            return false
        }
}

// function to lock the game board at the end of the game
const lockBoard = () => {
    for (let i = 0; i < document.querySelectorAll('.square').length; i++) {
        // console.log(`I'm locking down ${document.querySelectorAll('.square')[i].id}`)
        document.querySelectorAll('.square')[i].removeEventListener('click', markSquare)
    }
}

// function to increment win trackers
const trackWins = () => {
    if (xPlayerTurn === true) {
        xWinCount += 1
        console.log(`X has won ${xWinCount} times`)
        document.querySelector('#xWins').innerText = xWinCount
    } else {
        oWinCount += 1
        document.querySelector('#oWins').innerText = oWinCount
    }
}

// function to initialize a game
const initializeGame = () => {
    // clear all existing content from container
    // console.log('the game is afoot')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    // create 9 squares
    for (let i = 0; i < 9; i++) {
        // create a square
        const square = document.createElement('div')
        // add the square class
        square.classList.add('square')
        // add the unclicked class
        square.classList.add('unclicked')
        // add a unique id
        square.id = `square-${i}`
        // add hidden p to each square to make innerHTML unique
        square.innerHTML = `<p class="hidden">${i}</p>`
        // push it to the DOM as a child of container
        container.appendChild(square)
        //add event listener for click, to run markSquare function
        square.addEventListener('click', markSquare)
    }
    xPlayerTurn = true
    playerDisplay = `X`
    document.querySelector('#results').innerHTML = `<p>It is the ${playerDisplay} player's turn</p>`
    turnCount = 0
}

// function to reset the game (don't need, can initialize new game instead)

// listener on reset button to reset the game
resetButton.addEventListener('click', initializeGame)

// listener to check DOM content and initialize game the first time
document.addEventListener('DOMContentLoaded', () => {
    initializeGame()
})