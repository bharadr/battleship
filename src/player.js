import { COLUMNS, ROWS, newGameboard } from "./gameboard";

export function newPlayer(name, computer) {
    let board = newGameboard();
    let previousAttacks = [];

    function getRandomCoordinate() {
        const row = Math.floor(Math.random() * ROWS); 
        const col = Math.floor(Math.random() * COLUMNS);
        return [ row, col ];
    }
    

    function coordinateExists(coordinate, list) {
        return list.some(item => item[0] === coordinate[0] && item[1] === coordinate[1]);
    }
    
    function makeAttack() {
        let coordinate = getRandomCoordinate();
        while (coordinateExists(coordinate, previousAttacks)) {
            coordinate = getRandomCoordinate();
        }
        previousAttacks.push(coordinate);
        return coordinate;
    }

    function declareAttack(row, col) {
        return `${name} launches attack on row ${row}, col ${col}!`
    }


    return {
        computer, 
        name,
        board,
        makeAttack,
        declareAttack,
        getRandomCoordinate,
    }
}
