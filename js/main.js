const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('.restart-button')  //bringing over elements from HTML and declaring variables
const statusText = document.querySelector('#status-text')
const boardArray = document.querySelectorAll('.cell')
let currentPlayer = 'X'
let running = false
let roundWon = false

const winConditions = [  //winning conditions for the game placed in an array. 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
]

let selection = ["", "", "", "", "", "", "", "", ""] //array to track spaces that are picked  

// Initialize game
startGame();


// Event listener
restartBtn.addEventListener('click', restartGame);

//event listener for the cells    

function startGame() {
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))  
    statusText.textContent = `${currentPlayer}'s turn`
}

function updateCell(event, index) {   //the function updates the index of current selections and stores it, 
                                        //listens for clicks on the board, and if there is an empty space it allows for the current player to select it. 
                                        //after each click it calls the functions to change the player while checking for a winner. 
    if (roundWon) return;
    selection[index] = currentPlayer
    const cell = event.target.closest('.cell')  //
    if (cell.textContent === '') {
        cell.textContent = currentPlayer
        playerChange()
        checkForWinner()
    }
}

function showWinner() {
    if (currentPlayer === "X") {
        statusText.textContent = 'O wins!'  //Had to hardcode due to issue. X's or O's would win but the game would say that the opposite player won. 
    }
    if(currentPlayer === "O"){
        statusText.textContent = 'X wins!'
    }
}

function checkForWinner() {
    roundWon = false
    for (let i = 0; i < winConditions.length; i++) {  //loops through the array defined previously to check for winning conditions
        const cellA = winConditions[i][0]
        const cellB = winConditions[i][1]
        const cellC = winConditions[i][2]
        
        if (boardArray[cellA].textContent === '' || boardArray[cellB].textContent === '' || boardArray[cellC].textContent === '') {
            continue; //if there hasn't been an X or O found in the win conditions in the loop the game continues
        }
        
        if ((boardArray[cellA].textContent === boardArray[cellB].textContent) && (boardArray[cellA].textContent === boardArray[cellC].textContent)) {
            roundWon = true;
            showWinner()
            running = false
            break; //If there has been an X's or O's found in the wining conditions it declares the winner and breaks out of the loop. 
        }
    
    
        if (!roundWon && !Array.from(boardArray).some(cell => cell.textContent === '')) {
        statusText.textContent = 'Draw!'  //If there hasn't been a player win the game and there isn't any spaces left the game is a draw. 
        running = false
        } 

    }
    
}
    

function playerChange() {
    currentPlayer = (currentPlayer == 'X') ? "O" : "X"  //ternary operator allows the player to change 
    statusText.textContent = `${currentPlayer}'s turn` //template literal places the players turn in the text content
}

function restartGame() {
    currentPlayer = 'X'
    statusText.textContent = `${currentPlayer}'s turn`  //resets game and erases all cells. 
    cells.forEach(cell => cell.textContent = '')
    roundWon = false
}

//Things I would do differently: Don't spend as much time on style initially. 
//Get basic elements in place but ultimately focus on functionality first.
//Take more breaks.  I look at things for too long and burn out 
//additional pseudocoding
