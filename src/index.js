import './styles.css';

import { newPlayer } from "./player";
import { newShip } from "./ship";
import { renderGameboard } from "./render";


function buildFleet(gamePlayer) {
    let shipLengths = [5, 4, 3, 3, 2];
    let coordinates = [[0, 0], [2, 2], [5,7], [0, 6], [7, 0]];
    let orientations = [true, true, false, false, true];
    for (let i = 0; i < shipLengths.length; i++) {
        let ship = newShip(shipLengths[i]);
        gamePlayer.board.placeShip(coordinates[i][0], coordinates[i][1], ship, orientations[i]);
    }
}

function buildRandomFleet(gamePlayer) {
    let shipLengths = [5, 4, 3, 3, 2];
    for (let i = 0; i < shipLengths.length; i++) {
        let ship = newShip(shipLengths[i]);
        let coordinate = gamePlayer.getRandomCoordinate();
        let orientation = Math.floor(Math.random() * 2) >= 1;
        while (!gamePlayer.board.placeShip(coordinate[0], coordinate[1], ship, orientation)) {
            coordinate = gamePlayer.getRandomCoordinate();
            orientation = Math.random() >= 0.5;
        }
    }
}


function initializeGame() {
    let p1 = newPlayer('Human', false);
    let p2 = newPlayer('Computer', true);
    
    buildRandomFleet(p1);
    buildRandomFleet(p2);
    
    renderGameboard(p1.board, "my-board", p1, p2)
    renderGameboard(p2.board, "enemy-board", p1, p2)    
}

document.getElementById("restart-button").addEventListener("click", () => {
    initializeGame();
})


initializeGame();