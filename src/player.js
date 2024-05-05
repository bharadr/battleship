const newGameBoard = require("./gameboard")

function newPlayer(name, computer) {
    let board = newGameBoard();

    return {
        computer, 
        name,
        board
    }
}

module.exports = newPlayer;
