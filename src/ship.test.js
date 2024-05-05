const newShip = require('./ship');

test('Newly created ship of non-zero length not sunk', () => {
  let s = newShip(5);
  expect(s.getHits()).toBe(0);
  expect(s.isSunk()).toBe(false);
});

test('Newly created ship of zero length fail', () => {
    expect(() => newShip(0)).toThrow(Error);
});

test('Hit function increases number of hits', () => {
    let s = newShip(5);
    expect(s.getHits()).toBe(0);
    s.hit();
    expect(s.getHits()).toBe(1);
    for (let i = 0; i < 4; i++) {
        s.hit();
    }
    expect(s.getHits()).toBe(5);
    expect(s.isSunk()).toBe(true);
});
