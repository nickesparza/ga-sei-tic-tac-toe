// const topLeft = document.querySelector('#topleft')
// const topMid = document.querySelector('#topmid')
// const topRight = document.querySelector('#topright')
// const midLeft = document.querySelector('#midleft')
// const midMid = document.querySelector('#midmid')
// const midRight = document.querySelector('#midright')
// const botLeft = document.querySelector('#botLeft')
// const botMid = document.querySelector('#botmid')
// const botRight = document.querySelector('#botright')
// const container = document.querySelector('#container')

const markSquare = () => {
    
}

const initializeGame = () => {
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
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame()
})