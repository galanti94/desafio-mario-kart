import { characterAttributes } from "./characters.js";
import { getRandomInt } from "./functions.js";
import { 
    challengeBlock,
    speedChallenge,
    agilityChallenge,
    powerChallenge
} from "./challenges.js";

let dices = {
    diceOne: getRandomInt(6),
    diceTwo: getRandomInt(6)
}

if (dices.diceOne === dices.diceTwo) {
    console.log("They are equal");
    dices.diceTwo--;

    if (dices.diceTwo < 0) {
        dices.diceTwo = 5;
    }
}

let players = {
    playerOne: {
        points: 0,
        character: characterAttributes[dices.diceOne]
    },
    playerTwo: {
        points: 0,
        character: characterAttributes[dices.diceTwo]
    }
};

console.log(players);

speedChallenge(players);
agilityChallenge(players);
powerChallenge(players);

console.log(players);
