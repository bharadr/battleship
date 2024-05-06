import { newGameboard } from "./gameboard";
let gb = newGameboard();


export function renderGameboard(gameBoard, elemId) {
    let gridDiv = document.getElementById(elemId);
    gridDiv.innerHTML = "";

    let boardArr = gameBoard.getBoard();
    let enemyBoard = elemId === "enemy-board";
    if (enemyBoard) {
        boardArr = gameBoard.getPublicBoard();
    }
    for (let i = 0; i < boardArr.length; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = 'row'
        for (let j = 0; j < boardArr[i].length; j++) {
            let cellDiv = document.createElement("div");
            let val = boardArr[i][j];
            cellDiv.classList.add('cell');
             if (val === gb.EMPTY_AND_HIT) {
                cellDiv.classList.add('empty-and-hit');
            } else if (val < 0 && val >= -100) {
                cellDiv.classList.add('boat-and-hit');
            } else if (val > 0) {
                cellDiv.classList.add('boat')
                if (enemyBoard) {
                    cellDiv.addEventListener("click", function() {
                        let result = gameBoard.receiveAttack(i, j);
                        if (!result) {
                            console.log(i, j);
                        }
                        renderGameboard(gameBoard, "enemy-board")
                    })
                }
            } else {
                cellDiv.classList.add('empty')
                if (enemyBoard) {
                    cellDiv.addEventListener("click", function() {
                        let result = gameBoard.receiveAttack(i, j);
                        if (!result) {
                            console.log(i, j);
                        }
                        renderGameboard(gameBoard, "enemy-board")
                    })
                }
            }
            rowDiv.appendChild(cellDiv);
        }
        gridDiv.appendChild(rowDiv);
    }
}
