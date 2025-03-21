import { getRandomInt } from "./functions.js"

export const challengeBlock = ['RETA', 'CURVA', 'CONFRONTO'];

export async function speedChallenge(players) {
    const dices = [await getRandomInt(6), await getRandomInt(6)];

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

export async function agilityChallenge(players) {
    const dices = [await getRandomInt(6), await getRandomInt(6)];

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

export async function powerChallenge(players) {
    const dices = [await getRandomInt(6), await getRandomInt(6)];

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

