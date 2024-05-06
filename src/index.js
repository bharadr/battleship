import './styles.css';

import { newPlayer } from "./player";
import { newShip } from "./ship";
import { renderGameboard } from "./render";


function buildFleet(player) {
    let shipLengths = [5, 4, 3, 3, 4];
    let coordinates = [[0, 0], [2, 2], [5,7], [0, 6], [7, 0]];
    let orientations = [true, true, false, false, true];
    for (let i = 0; i < shipLengths.length; i++) {
        let ship = newShip(shipLengths[i]);
        player.board.placeShip(coordinates[i][0], coordinates[i][1], ship, orientations[i]);
    }
}



// Initalize 2 players
let p1 = newPlayer('Human', false)
let p2 = newPlayer('Computer', true)
console.log(p1.board.getBoard())
console.log(p2.board.getBoard())

let turn = 0;

buildFleet(p1);
buildFleet(p2);

console.log(p1.board.getBoard())
console.log(p2.board.getBoard())


renderGameboard(p1.board, "my-board")
renderGameboard(p2.board, "enemy-board")
