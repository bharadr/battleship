import { newPlayer } from "./player";

test('Get Random Coordinate ', () => {
    let p = newPlayer("John");
    let coordinate = p.getRandomCoordinate();
    expect(coordinate.length).toBe(2);
    expect(coordinate[0]).toBeGreaterThanOrEqual(0);
    expect(coordinate[0]).toBeLessThanOrEqual(9);
    expect(coordinate[1]).toBeGreaterThanOrEqual(0);
    expect(coordinate[1]).toBeLessThanOrEqual(9);
});

test('Declare Attack ', () => {
    let p = newPlayer("John");
    expect(p.declareAttack(1, 2)).toBe("John launches attack on row 1, col 2!");
});

test('Make Attack ', () => {
    let p = newPlayer("John");
    let arraySet = new Set();
    for (let i = 0; i < 20; i++) {
        arraySet.add(p.makeAttack())
    }
    expect(arraySet.size).toBe(20);
});
