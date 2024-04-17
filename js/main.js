// board for the game
const board = [[" ", " " , " "],
               [" ", " " , " "],
               [" ", " " , " "],
]

const game = {  //object for the game
    update : function(){}
    isgameOver: function(){},
    move : function(c){},
    possibleMoves : function(){},
    updateBoard : function(){
        console.log("  ") //empty space for the board
        board.forEach((arr, i) => {
        console.log(arr.toString().replace(/,/g, "|"))
        })
    }
}