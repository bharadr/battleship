const newPlayer = require("./player")
const newShip = require("./ship")


function buildFleet(player) {
    let shipLengths = [5, 4, 3, 3, 2];
    let coordinates = [[0, 0], [2, 2], [5,7], [0, 6], [7, 0]];
    let orientations = [true, true, false, false, true];
    for (let i = 0; i < shipLengths.length; i++) {
        let ship = newShip(shipLengths[i]);
        player.board.placeShip(coordinates[i][0], coordinates[i][1], ship, orientations[i])
    }
}



// Initalize 2 players
let p1 = newPlayer('Human', false)
let p2 = newPlayer('Computer', true)

buildFleet(p1);
buildFleet(p2);