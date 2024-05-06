export function newShip(length) {

    if (length < 1) {
        throw new Error("Invalid ship length. Length must be at least 1.");
    }
    
    let hits = 0;

    function hit() {
        hits+= 1;
    }

    function isSunk() {
        return hits >= length;
    }

    const getHits = () => hits;

    return {
        length,
        getHits,
        hit,
        isSunk,
    }
}
