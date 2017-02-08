let lastPile;
window.onload = function () {
    const piles = document.querySelectorAll('.pile');
    const score = document.querySelectorAll('.score');
    const moles = document.querySelectorAll('.mole');
}

window.onclick = function () {
    moleUp(document.querySelectorAll('.pile'));
}

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomPile(piles) {
    const index = Math.floor(Math.random() * piles.length);
    const pile = piles[index];
    if (lastPile === pile) {
        console.log("same");
        return getRandomPile(piles);
    }
    /**
     * So that it's not the one from before
     */
    lastPile = pile;
    return pile;
}

function moleUp(piles) {
    const time = getRandomTime(200, 500);
    const pile = getRandomPile(piles);
    const mole = pile.nextElementSibling;

    mole.classList.add('show');

    setTimeout(() => {
        // GEHT SO NICH
        mole.classList.remove('show');
    }, time);
}