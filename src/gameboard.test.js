import { newGameboard, EMPTY_AND_HIT, EMPTY } from "./gameboard";
import { newShip } from "./ship";

test('New Gameboard, basic state ', () => {
    let b = newGameboard();
    let board = b.getBoard();
    expect(board.length).toBe(10);
    expect(board[0].length).toBe(10);
    expect(b.getAllSunk()).toBe(false);
});


test('Place Ship on New Gameboard Correctly', () => {
    let b = newGameboard();
    let s = newShip(5)
    let s2 = newShip(5)
    // Correct Placement Horizontal
    expect(b.placeShip(0, 0, s, true)).toBe(true);
    expect(b.getNumShips()).toBe(1);

    // Correct Placement Vertical
    expect(b.placeShip(1, 0, s2, false)).toBe(true);
    expect(b.getNumShips()).toBe(2);
});


test('Place Ship on New Gameboard Incorrectly', () => {
    let b = newGameboard();
    let s = newShip(5)
    let s2 = newShip(5)
    // Incorrect Placement out of bounds starting point
    expect(b.placeShip(-1, 0, s, true)).toBe(false);
    expect(b.placeShip(0, -1, s, true)).toBe(false);
    expect(b.placeShip(10, 0, s, false)).toBe(false);
    expect(b.placeShip(0, 10, s, false)).toBe(false);

    // Incorrect Placement out of bounds ending point
    expect(b.placeShip(0, 8, s, true)).toBe(false);
    expect(b.placeShip(8, 0, s, false)).toBe(false);    

    // First Placement fine but subsequent placements overlap
    expect(b.placeShip(0, 4, s, true)).toBe(true);
    expect(b.placeShip(0, 4, s2, true)).toBe(false);    
    expect(b.placeShip(0, 4, s2, false)).toBe(false);    
    expect(b.placeShip(0, 1, s2, true)).toBe(false);    

    // Second Placement Fine
    expect(b.placeShip(0, 1, s2, false)).toBe(true);    
    expect(b.getNumShips()).toBe(2);
});

test('Test receiveAttack', () => {
    let b = newGameboard();
    let s = newShip(5)
    // Place a ship
    expect(b.placeShip(0, 4, s, true)).toBe(true);
    // Failed attacks due to being out of bounds
    expect(b.receiveAttack(-1, 0)).toBe(false);
    expect(b.receiveAttack(0, -1)).toBe(false);
    expect(b.receiveAttack(10, 0)).toBe(false);
    expect(b.receiveAttack(0, 10)).toBe(false);

    // Successful Attack on empty space
    expect(b.receiveAttack(0, 0)).toBe(true);
    // If we attack again, it should not work 
    expect(b.receiveAttack(0, 0)).toBe(false);
    // Check State
    expect(b.getBoard()[0][0]).toBe(EMPTY_AND_HIT);

    // Successful Attack on actual ship
    expect(b.receiveAttack(0, 4)).toBe(true);
    // If we attack again, it should not work 
    expect(b.receiveAttack(0, 4)).toBe(false);
    // Check State
    expect(b.getBoard()[0][4]).toBe(-1)
});


test('Test allSunk', () => {
    let b = newGameboard();
    let s = newShip(5)
    let s2 = newShip(3)
    // Place 2 ships
    expect(b.placeShip(0, 4, s, true)).toBe(true);
    expect(b.placeShip(0, 1, s2, false)).toBe(true);
    expect(b.getAllSunk()).toBe(false);
    // Eliminate ship 1 
    for (let i = 0; i < s.length; i++) {
        b.receiveAttack(0, 4 + i);
    }
    expect(b.getAllSunk()).toBe(false);
    // Eliminate ship 2
    for (let i = 0; i < s2.length; i++) {
        b.receiveAttack(0 + i, 1);
    }
    expect(b.getAllSunk()).toBe(true);
});


test('Test gameBoard and public board', () => {
    let b = newGameboard();
    let s = newShip(5)
    let s2 = newShip(3)
    // Place 2 ships
    expect(b.placeShip(0, 4, s, true)).toBe(true);
    expect(b.placeShip(0, 1, s2, false)).toBe(true);
    // Attack the empty space
    b.receiveAttack(0, 0);
    // Attack the first ship
    for (let i = 0; i < s.length; i++) {
        b.receiveAttack(0, 4 + i);
    }
    // Check the board and make sure the values are proper
    let gameboard = b.getBoard();
    const counter = {};
  
    // Assemble a counter and test the values
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard.length; j++) {
            let val = gameboard[i][j];
            counter[val] = (counter[val] || 0) + 1;
        }
    }
    expect(counter[EMPTY]).toBe(91);
    expect(counter[EMPTY_AND_HIT]).toBe(1);
    expect(counter[-1]).toBe(5);
    expect(counter[2]).toBe(3);

    // Check the public board and make sure the values are proper
    let publicBoard = b.getPublicBoard();
    const publicCounter = {};
    // Assemble a counter and test the values
    for (let i = 0; i < publicBoard.length; i++) {
        for (let j = 0; j < publicBoard.length; j++) {
            let val = publicBoard[i][j];
            publicCounter[val] = (publicCounter[val] || 0) + 1;
        }
    }
    expect(publicCounter[EMPTY]).toBe(94);
    expect(publicCounter[EMPTY_AND_HIT]).toBe(1);
    expect(publicCounter[-1]).toBe(5);
});
