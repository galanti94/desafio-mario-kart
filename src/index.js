import { characterAttributes } from "./characters.js";
import { getRandomInt } from "./functions.js";
import { 
    challengeBlock,
    speedChallenge,
    agilityChallenge,
    powerChallenge
} from "./challenges.js";

async function main() {
    let dices = {
        diceOne: await getRandomInt(6),
        diceTwo: await getRandomInt(6)
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

    console.log('🏁 Game has started 🏁')
    console.log(`🥊 ${players.playerOne.character.name} VS ${players.playerTwo.character.name} 🥊\n`)

    for (let i = 0; i < 5; i++) {
        let challengeNumber = await getRandomInt(3);
        console.log('Challenge number: ' + challengeNumber, '\n');

        console.log('The challenge block is ' + challengeBlock[challengeNumber], '\n');

        switch(challengeNumber){
            case 0:
                await speedChallenge(players);
                continue;
            case 1:
                await agilityChallenge(players);
                continue;
            default:
                await powerChallenge(players);
                continue;
        }
    }

    console.log(`\n${players.playerOne.character.name} has ${players.playerOne.points} and ${players.playerTwo.character.name} has ${players.playerTwo.points}`)

    if (players.playerOne.points > players.playerTwo.points) {
        console.log(players.playerOne.character.name + ' won the race!\n');
        return;
    }

    if (players.playerOne.points < players.playerTwo.points) {
        console.log(players.playerTwo.character.name + ' won the race!\n');
        return;
    }

    console.log('Its a tie!', '\n');
}

main();