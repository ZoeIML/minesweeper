document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
  { //0
    row: 0, 
    col: 0, 
    isMine: false, 
    hidden: true,
    surroundingMines: 0
  },
  {//1
    row: 0, 
    col: 1, 
    isMine: false, 
    hidden: true,
    surroundingMines: 1
  },
  {//2
    row: 0, 
    col: 2, 
    isMine: true, 
    hidden: true,
    surroundingMines: 1
  },
  {//3
    row: 0, 
    col: 3, 
    isMine: false, 
    hidden: true,
    surroundingMines: 2
  },
  { // 4
    row: 1, 
    col: 0, 
    isMine: false, 
    hidden: true,
    surroundingMines: 0
  },
  {//5
    row: 1, 
    col: 1, 
    isMine: false, 
    hidden: true,
    surroundingMines: 1
  },
  {//6
    row: 1, 
    col: 2, 
    isMine: false, 
    hidden: true,
    surroundingMines: 2
  },
  {//7
    row: 1, 
    col: 3, 
    isMine: true, 
    hidden: true,
    surroundingMines: 1
  },
  {//8
    row: 2, 
    col: 0, 
    isMine: false, 
    hidden:true,
    surroundingMines: 2
  },
  {//9
    row: 2, 
    col: 1, 
    isMine: false, 
    hidden: true,
    surroundingMines: 2
  },
  {//10
    row: 2, 
    col: 2, 
    isMine: false, 
    hidden: true,
    surroundingMines: 2
  }, 
  {//11
    row: 2, 
    col: 3, 
    isMine: false, 
    hidden: true,
    surroundingMines: 1
  },
  {//12
    row: 3, 
    col: 0, 
    isMine: true, 
    hidden: true,
    surroundingMines: 1
  },
  {//13
    row: 3, 
    col: 1, 
    isMine: true, 
    hidden:true,
    surroundingMines: 1
  },
  {//14
    row: 3, 
    col: 2, 
    isMine: false, 
    hidden: true,
    surroundingMines: 1
  },
  {//15
    row: 3, 
    col: 3, 
    isMine: false, 
    hidden: true,
    surroundingMines: 0
  }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])

    document.addEventListener('click', checkForWin)
    document.addEventListener('contextmenu', checkForWin)
  } 
   // console.log(countSurroundingMines(board.cells[i])); 
    lib.initBoard()
  }

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

  for (i = 0; i < board.cells.length; i++){
    if(!board.cells[i].isMine && board.cells[i].hidden) {
      return;
    }
    else if(board.cells[i].isMine && !board.cells[i].isMarked) {
      return;
    }
  }
  lib.displayMessage('You win!')
  }

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

  for (i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }
  return count;
}
