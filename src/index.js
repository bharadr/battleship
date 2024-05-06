import './styles.css';

import { newPlayer } from "./player";
import { newShip } from "./ship";
// import { renderGameboard } from "./render";


function buildFleet(gamePlayer) {
    let shipLengths = [5, 4, 3, 3, 2];
    let coordinates = [[0, 0], [2, 2], [5,7], [0, 6], [7, 0]];
    let orientations = [true, true, false, false, true];
    for (let i = 0; i < shipLengths.length; i++) {
        let ship = newShip(shipLengths[i]);
        gamePlayer.board.placeShip(coordinates[i][0], coordinates[i][1], ship, orientations[i]);
    }
}

let p1 = newPlayer('Human', false);
console.log(p1.board.getBoard());
buildFleet(p1);
console.log(p1.board.getBoard());
