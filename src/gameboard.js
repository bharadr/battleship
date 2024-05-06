export function newGameboard() {
    let rows = 10;
    let columns = 10;
    let shipList = [];
    let gameBoard = [];

    // The Gameboard contains 4 possible values
    const EMPTY = -1000;
    const EMPTY_AND_HIT = -2000;
    // 3. (index of the boat on the shiplist + 1)
    // when the boat is not hit
    // 4. -1 * (index of the boat on the shiplist + 1)
    // when the boat is hit.

    for (let i = 0; i < rows; i++) {
        let row = []
        for (let j = 0; j < columns; j++) {
            row.push(EMPTY);
        }
        gameBoard.push(row);
    }


    function fillBoardRange(startRow, startCol, endRow, endCol, horizontal, value) {
        if (horizontal) {
            for (let i = startCol; i < endCol + 1; i++) {
                gameBoard[startRow][i] = value;
            }
        } else {
            for (let i = startRow; i < endRow + 1; i++) {
                gameBoard[i][startCol] = value;
            }
        }
    }

    function allEmpty(startRow, startCol, endRow, endCol, horizontal) {
        if (horizontal) {
            for (let i = startCol; i < endCol + 1; i++) {
                if (gameBoard[startRow][i] !== EMPTY) {
                    return false;
                }
            }
        } else {
            for (let i = startRow; i < endRow + 1; i++) {
                if (gameBoard[i][startCol] !== EMPTY) {
                    return false;
                }
            }
        }
        return true
    }

    // If ship placed successfully return true
    // if we failed to place ship, return false
    function placeShip(row, col, ship, horizontal) {
        // Starting point out of bounds
        if (row < 0 || col < 0 || row >= rows || col >= columns) {
            return false;
        }
        let endingRow = row;
        let endingCol = col;
        if (horizontal) {
            endingCol += (ship.length - 1);
        } else {
            endingRow += (ship.length - 1);
        }
        // Ending point out of bounds
        if (endingRow >= rows || endingCol >= columns) {
            return false;
        }
        // Is any of the spaces occupied already?
        if (!allEmpty(row, col, endingRow, endingCol, horizontal)) {
            return false;
        }
        shipList.push(ship);
        fillBoardRange(row, col, endingRow, endingCol, horizontal, shipList.length);
        return true;
    }

    // If attack was received, return true
    // If attack was not received return false
    function receiveAttack(row, col) {
        // Point out of bounds
        if (row < 0 || col < 0 || row >= rows || col >= columns) {
            return false;
        }
        let val = gameBoard[row][col]
        // This location was already attacked 
        if (val === EMPTY_AND_HIT || (val >= -100 && val < 0)) {
            return false;
        }
        // Register attack
        if (val === EMPTY) {
            gameBoard[row][col] = EMPTY_AND_HIT;
        }
        // Hit an actual boat
        if (val > 0) {
            gameBoard[row][col] *= -1;
            let shipIndex = val - 1;
            shipList[shipIndex].hit();
        }
        return true;
    }

    function getAllSunk() {
        if (shipList.length === 0) {
            return false;
        }
        return shipList.every(ship => ship.isSunk());
    }

    const getBoard = () => gameBoard;
    const getNumShips = () => shipList.length;

    function getPublicBoard() {
        let board = getBoard();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] > 0) {
                    board[i][j] = EMPTY;
                }
            }
        }
        return board;
    }

    return {
        placeShip,
        receiveAttack, 
        getNumShips, 
        getAllSunk, 
        getBoard, 
        getPublicBoard,
        EMPTY,
        EMPTY_AND_HIT,
    }
}
