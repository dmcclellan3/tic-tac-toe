// Bringing over elements that are needed

const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('#restart-button')
const statusText = document.querySelector('#status-text')
const boardArray = document.querySelectorAll('.cell')
boardArray.forEach(cell => cell.addEventListener('click', updateCell))
document.querySelector('.restart-button').addEventListener('click', restartGame) 
console.log('boardArray', boardArray)


// Listing out the items in the array for all possible ways to win. 

const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [6, 4, 2],
        [8, 4, 0],
]


let currentPlayer = "X"
let selection = ["", "", "", "", "", "", "", "", ""]
let running = true

//all the functions needed for the game



function startGame(){

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))
    document.querySelector('restart-button').addEventListener('click', restartGame) 
    statusText.textContent = `${currentPlayer}s turn`
    running = true 

}



//closest finds what element we are in.  Whatever was clicked give us the closest parent that has a cell class. 
function updateCell(event){

    const cell = event.target.closest('.cell')
    if (cell.textContent === '') {
        cell.textContent = currentPlayer
        statusText.classList.remove("d-none")
        
        checkForWinner()
        playerChange()
    }
    
}
    
function checkForWinner(){
    
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++){
        // const condition = winConditions[i]
        const cellA = winConditions[i][0]
        const cellB = winConditions[i][1]
        const cellC = winConditions[i][2]

        console.log('cellABCof ', i, cellA, cellB, cellC)
        
        if(boardArray[cellA].textContent === '' || boardArray[cellB].textContent === '' || boardArray[cellC].textContent === ''){
            continue;
        }
        // if(cellA === cellB && cellB === cellC){
            // console.log("BA ", boardArray[cellA].textContent, boardArray[cellB].textContent, boardArray[cellC].textContent)
            if ((boardArray[cellA].textContent === boardArray[cellB].textContent) && (boardArray[cellA].textContent === boardArray[cellC].textContent)) {

                roundWon === true;
                console.log('winner', currentPlayer)
                playerChange()
                break;
            }
    // }
}
        if(roundWon){
        statusText.textContent = `${currentPlayer}wins!`
        running = false
        }
        else if(!selection.includes('')){
        statusText.textContent = 'Draw!'
        running = false
        }
        else{
            // checkForWinner()
        }

}

function playerChange(){
    
    currentPlayer = (currentPlayer == 'X') ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`
    
}


function restartGame(){
    let currentPlayer = 'X'
    let selection = ["", "", "", "", "", "", "", "", ""]
    statusText.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = '')
    statusText.classList.add("d-none")

}

//Things I would do differently: Don't spend as much time on style initially. 
//Get basic elements in place but ultimately focus on functionality first. 

