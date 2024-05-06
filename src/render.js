import { EMPTY_AND_HIT } from "./gameboard";



function addComment(text) {
    let commentSection = document.getElementById("commentary");
    let comment1 = document.createElement("p");
    comment1.innerText = text;
    commentSection.appendChild(comment1)
    commentSection.scrollTop = commentSection.scrollHeight;
}

function exchangeFire(row, col, attackingPlayer, opposingPlayer) {
    opposingPlayer.board.receiveAttack(row, col);
    addComment(attackingPlayer.declareAttack(row, col));
    renderGameboard(opposingPlayer.board, "enemy-board", attackingPlayer, opposingPlayer);
    if (opposingPlayer.board.getAllSunk()) {
        addComment(attackingPlayer.name + ' wins!');
        return;
    }
   
    let responseCoord = opposingPlayer.makeAttack();
    attackingPlayer.board.receiveAttack(responseCoord[0], responseCoord[1]);
    addComment(opposingPlayer.declareAttack(responseCoord[0], responseCoord[1]));
    renderGameboard(attackingPlayer.board, "my-board", attackingPlayer, opposingPlayer);
    if (attackingPlayer.board.getAllSunk()) {
        addComment(opposingPlayer.name + ' wins!');
    }
}


export function renderGameboard(gameBoard, elemId, myPlayer, opposingPlayer) {
    let gridDiv = document.getElementById(elemId);
    gridDiv.innerHTML = "";

    let boardArr = gameBoard.getBoard();
    let enemyBoard = elemId === "enemy-board";
    if (enemyBoard) {
        boardArr = gameBoard.getPublicBoard();
    }

    // Do we have a win condition
    let gameover = myPlayer.board.getAllSunk() || opposingPlayer.board.getAllSunk()

    // Create Top Row of Column Markers
    let columnMarkerDiv = document.createElement("div");
    columnMarkerDiv.classList.add("row");
    columnMarkerDiv.id = "special-row"
    for (let i = 0; i < boardArr[0].length; i++) {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("col-marker");
        cellDiv.innerText = i;
        columnMarkerDiv.appendChild(cellDiv);
    }
    gridDiv.appendChild(columnMarkerDiv);

    for (let i = 0; i < boardArr.length; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = 'row'
        let markerDiv = document.createElement("div");
        markerDiv.classList.add('row-marker')
        markerDiv.innerText = i;
        rowDiv.appendChild(markerDiv);
        for (let j = 0; j < boardArr[i].length; j++) {
            let cellDiv = document.createElement("div");
            let val = boardArr[i][j];
            cellDiv.classList.add('cell');
            if (gameover) {
                cellDiv.classList.add('loser');
            } else {
                if (val === EMPTY_AND_HIT) {
                    cellDiv.classList.add('empty-and-hit');
                } else if (val < 0 && val >= -100) {
                    cellDiv.classList.add('boat-and-hit');
                } else if (val > 0) {
                    cellDiv.classList.add('boat')
                } else {
                    cellDiv.classList.add('empty')
                    if (enemyBoard && !gameover) {
                        cellDiv.addEventListener("click", function() {
                            exchangeFire(i, j, myPlayer, opposingPlayer);
                        })
                    }
                }    
            }
            rowDiv.appendChild(cellDiv);
        }
        gridDiv.appendChild(rowDiv);
    }
}
