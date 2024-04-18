// Bringing over elements that are needed

const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('restart-button')
const statusText = document.querySelector('status-text')
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))
document.querySelector('.restart-button').addEventListener('click', restartGame) 

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

startGame()
updateCell()
checkForWinner()
playerChange()
restartGame()

function startGame(){

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', updateCell))
    document.querySelector('restart-button').addEventListener('click', restartGame) 
    statusText.textContent = `${currentPlayer}s turn`

}



//closest finding what element we are in.  Whatever was clicked give us the closest parent that has a cell class. 
function updateCell(event){

    const cell = event.target.closest('.cell')
    cell.textContent = 'X'
    console.log('cell', cell.getAttribute('data-cell-index'))
    selection = currentPlayer
}

function checkForWinner(){
    
    let roundWin = false
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i]
        const cellA = selection[condition[0]]
        const cellB = selection[condition[1]]
        const cellC = selection[condition[2]]
        
        if(cellA == '' || cellB == '' || cellC == ''){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
        roundWin == true;
        break;
    }
}
    if(roundWin){
        statusText.textContent = `${currentPlayer}wins!`
        running = false
    }
    else if(!selection.includes('')){
        statusText.textContent = 'Draw!'
        running = false
    }
    else{
        playerChange()
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

}





