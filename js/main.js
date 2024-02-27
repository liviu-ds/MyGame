/*----- constants -----*/
const boardSize = 10;
const player1Board = document.getElementById('player1Board');
const player2Board = document.getElementById('player2Board');


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/



// Create boards for both players
createBoard(player1Board);
createBoard(player2Board);


function createBoard(boardElement) {
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        boardElement.appendChild(row);
    }
}

//Placing ships on board 
placeShips(player1Board);
placeShips(player2Board);

function placeShips(boardElement) {
    const cells = boardElement.querySelectorAll('.cell');
    const ships = [5, 4, 3, 3, 2]; 

    }


player2Board.addEventListener('click', handleCellClick);

function handleCellClick(event) {
    const cell = event.target;
    if (!cell.classList.contains('cell')) return; 
    const row = cell.parentElement;
    const rowIndex = Array.from(row.parentElement.children).indexOf(row);
    const colIndex = Array.from(row.children).indexOf(cell);

    if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
      
        return;
    }

    if (cell.classList.contains('ship')) {
        
        cell.classList.add('hit');
        checkGameOver(player2Board);
    } else {
      
        cell.classList.add('miss');
     
    }
}


function checkGameOver(boardElement) {
    const ships = boardElement.querySelectorAll('.ship');
    const hits = boardElement.querySelectorAll('.hit');
    if (hits.length === ships.length) {
        alert("Game Over! All opponent's ships are sunk.");

    }
}