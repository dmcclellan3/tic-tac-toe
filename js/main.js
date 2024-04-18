// Bringing over elements that are needed

const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('restart-button')
const statusText = document.querySelector('status-text')
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('restart-game').addEventListener('click', handleRestartGame) 

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
let selections = ["", "", "", "", "", "", "", "", ""]
let running = "false"

//all the functions needed for the game

function startGame(){

}

function restartGame(){

}

// function handleCellClick() {
//     alert('Hello');
// }

function updateCell(cell, index){
    
}

function checkForWinner(){

}

function playerChange(){

}



// board for the game
// const board = [[" ", " " , " "],
//                [" ", " " , " "],
//                [" ", " " , " "],
// ]

// const game = {  //object for the game
//     update : function(){}
//     isgameOver: function(){},
//     move : function(c){},
//     possibleMoves : function(){
//         const p = []

//         for(let i = 0; i < board.length; i++){
//             for(let j = 0; j < board[0].length; j++){
//                 if(board[i][j] === " "){
//                     p.push({row: i, col: j})
//                 }
//             }
//         }
//         return p

//         updateBoard : function(){
//         console.log("  ") //empty space for the board
//         board.forEach((arr, i) => {
//         console.log(arr.toString().replace(/,/g, "|"))
//         //changing an array to a string and replacing the commas with lines to configure the board
//         })
//         }
 
//     }
// }