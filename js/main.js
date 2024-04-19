// Bringing over elements that are needed

// const cells = document.querySelectorAll('.cell')
// const restartBtn = document.querySelector('#restart-button')
// const statusText = document.querySelector('#status-text')
// const boardArray = document.querySelectorAll('.cell')
// boardArray.forEach(cell => cell.addEventListener('click', updateCell))
// document.querySelector('#restart-button').addEventListener('click', restartGame) 
// console.log('boardArray', boardArray)


// Listing out the items in the array for all possible ways to win. 

// const winConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
// ]


// let currentPlayer = "X"
// let selection = ["", "", "", "", "", "", "", "", ""]
// let running = true

//all the functions needed for the game



// function startGame(){

//     document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))
//     document.querySelector('restart-button').addEventListener('click', restartGame) 
//     statusText.textContent = `${currentPlayer}s turn`
//     running = true 

// }



//closest finds what element we are in.  Whatever was clicked give us the closest parent that has a cell class. 
// function updateCell(event){

//     const cell = event.target.closest('.cell')
//     if (cell.textContent === '') {
//         cell.textContent = currentPlayer
//         statusText.classList.remove("d-none")
        
//         checkForWinner()
//         playerChange()
//     }
    
// }
    
// function checkForWinner(){
    
//     let roundWon = false
//     for (let i = 0; i < winConditions.length; i++){
//         const cellA = winConditions[i][0]
//         const cellB = winConditions[i][1]
//         const cellC = winConditions[i][2]
        
//         if(boardArray[cellA].textContent === '' || boardArray[cellB].textContent === '' || boardArray[cellC].textContent === ''){
//             continue;
//         }
        
//             if ((boardArray[cellA].textContent === boardArray[cellB].textContent) && (boardArray[cellA].textContent === boardArray[cellC].textContent)) {

//                 roundWon = true;
//                 statusText.textContent = `${currentPlayer}wins!`
//                 console.log('winner', currentPlayer)
//                 running = false
//                 break;
//             }

            
    // }
// }
        // if(roundWon){
        // statusText.textContent = `${currentPlayer}wins!`
        // running = false
        // }
        // else if(!selection.includes('')){  //if there are no options or spaces remaining 
        // statusText.textContent = 'Draw!'   //then we can use the not operator to indicate a draw
        // running = false
        
        // }
        // else{
        //     // playerChange()
        // }

// }

// function playerChange(){
    
//     currentPlayer = (currentPlayer == 'X') ? "O" : "X"
//     statusText.textContent = `${currentPlayer}'s turn`
    
// }


// function restartGame(){
//     let currentPlayer = 'X'
//     let selection = ["", "", "", "", "", "", "", "", ""]
//     statusText.textContent = `${currentPlayer}'s turn`
//     cells.forEach(cell => cell.textContent = '')
//     statusText.classList.add("d-none")

// }

//Things I would do differently: Don't spend as much time on style initially. 
//Get basic elements in place but ultimately focus on functionality first. 

const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('.restart-button')
const statusText = document.querySelector('#status-text')
const boardArray = document.querySelectorAll('.cell')
let currentPlayer = 'X'

const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
]

// Initialize game
startGame();


// Event listeners
restartBtn.addEventListener('click', restartGame);

function startGame() {
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))
    statusText.textContent = `${currentPlayer}'s turn`
}

function updateCell(event) {
    const cell = event.target.closest('.cell')
    if (cell.textContent === '') {
        cell.textContent = currentPlayer
        checkForWinner()
        playerChange()
    }
}

function checkForWinner() {
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const cellA = winConditions[i][0]
        const cellB = winConditions[i][1]
        const cellC = winConditions[i][2]

        if (boardArray[cellA].textContent === '' || boardArray[cellB].textContent === '' || boardArray[cellC].textContent === '') {
            continue;
        }

        if ((boardArray[cellA].textContent === boardArray[cellB].textContent) && (boardArray[cellA].textContent === boardArray[cellC].textContent)) {
            roundWon = true;
            statusText.textContent = `${currentPlayer} wins!`
            running = false
            break;
        }
    }

    if (!roundWon && !Array.from(boardArray).some(cell => cell.textContent === '')) {
        statusText.textContent = 'Draw!'
        running = false
    }
}

function playerChange() {
    currentPlayer = (currentPlayer == 'X') ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`
}

function restartGame() {
    currentPlayer = 'X'
    statusText.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = '')
}
