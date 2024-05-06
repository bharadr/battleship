import { newGameboard } from "./gameboard";

export function newPlayer(name, computer) {
    let board = newGameboard();
    return {
        computer, 
        name,
        board
    }
}
