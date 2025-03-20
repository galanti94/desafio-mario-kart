import { getRandomInt } from "./functions.js"

export const challengeBlock = {
    0: 'RETA',
    1: 'CURVA',
    2: 'CONFRONTO'
}

export function speedChallenge(players) {
    const dices = [getRandomInt(6), getRandomInt(6)];

    const playerOneResult = players.playerOne.character.speed + dices[0];
    const playerTwoResult = players.playerTwo.character.speed + dices[1];

    const playerOneCharName = players.playerOne.character.name;
    const playerTwoCharName = players.playerTwo.character.name;

    console.log('Dices results: ' + dices);
    console.log(playerOneCharName + ' scores ' + playerOneResult + ' and ' + playerTwoCharName + ' scores ' + playerTwoResult)

    if (playerOneResult > playerTwoResult) {
        players.playerOne.points++;
        console.log(playerOneCharName + " won!");
        return;
    }

    if (playerOneResult < playerTwoResult) {
        players.playerTwo.points++;
        console.log(playerTwoCharName + " won!");
        return;
    }

    console.log("No one won!");
}

export function agilityChallenge(players) {
    const dices = [getRandomInt(6), getRandomInt(6)];

    const playerOneResult = players.playerOne.character.agility + dices[0];
    const playerTwoResult = players.playerTwo.character.agility + dices[1];

    const playerOneCharName = players.playerOne.character.name;
    const playerTwoCharName = players.playerTwo.character.name;

    console.log('Dices results: ' + dices);
    console.log(playerOneCharName + ' scores ' + playerOneResult + ' and ' + playerTwoCharName + ' scores ' + playerTwoResult)

    if (playerOneResult > playerTwoResult) {
        players.playerOne.points++;
        console.log(playerOneCharName + " won!");
        return;
    }

    if (playerOneResult < playerTwoResult) {
        players.playerTwo.points++;
        console.log(playerTwoCharName + " won!");
        return;
    }

    console.log("No one won!");
}

export function powerChallenge(players) {
    const dices = [getRandomInt(6), getRandomInt(6)];

    const playerOneResult = players.playerOne.character.power + dices[0];
    const playerTwoResult = players.playerTwo.character.power + dices[1];

    const playerOneCharName = players.playerOne.character.name;
    const playerTwoCharName = players.playerTwo.character.name;

    console.log('Dices results: ' + dices);
    console.log(playerOneCharName + ' scores ' + playerOneResult + ' and ' + playerTwoCharName + ' scores ' + playerTwoResult)

    if (playerOneResult > playerTwoResult) {
        players.playerTwo.points--;
        
        if (players.playerTwo.points < 0) {
            players.playerTwo.points = 0;
        }

        console.log(playerOneCharName + " won!");
        return;
    }

    if (playerOneResult < playerTwoResult) {
        players.playerOne.points--;

        if (players.playerOne.points < 0) {
            players.playerOne.points = 0;
        }
        
        console.log(playerTwoCharName + " won!");
        return;
    }

    console.log("No one won!");
}

