const playerOne = {
  NAME: "playerOne",
  SPEED: 4,
  HANDLING: 3,
  POWER: 3,
  SCORE: 0,
};

const playerTwo = {
  NAME: "playerTwo",
  SPEED: 3,
  HANDLING: 4,
  POWER: 4,
  SCORE: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Straight";
      break;
    case random < 0.66:
      result = "Turn";
      break;

    default:
      result = "Showdown";
  }

  return result;
}

async function logRollResult(characterName, block, rollDice, attribute) {
  console.log(
    `${characterName} 🎲 rolled a dice of ${block} ${rollDice} + ${attribute} = ${
      rollDice + attribute
    }`
  );
}

async function startRaceEngine(characterOne, characterTwo) {
  const TOTAL_ROUNDS = 6;
  for (let round = 1; round <= TOTAL_ROUNDS; round++) {
    console.log(`🏁 Rodada ${round}`);

    //draw block
    let block = await getRandomBlock();
    console.log(`${block} section`);

    // roll dice
    let rollDiceOne = await rollDice();
    let rollDiceTwo = await rollDice();

    // skill test
    let testSkillOne = 0;
    let testSkillTwo = 0;

    if (block === "Straight") {
      testSkillOne = rollDiceOne + characterOne.SPEED;
      testSkillTwo = rollDiceTwo + characterTwo.SPEED;

      await logRollResult(
        characterOne.NAME,
        "SPEED",
        rollDiceOne,
        characterOne.SPEED
      );
      await logRollResult(
        characterTwo.NAME,
        "SPEED",
        rollDiceTwo,
        characterTwo.SPEED
      );
    }

    if (block === "Turn") {
      testSkillOne = rollDiceOne + characterOne.HANDLING;
      testSkillTwo = rollDiceTwo + characterTwo.HANDLING;

      await logRollResult(
        characterOne.NAME,
        "HANDLING",
        rollDiceOne,
        characterOne.HANDLING
      );
      await logRollResult(
        characterTwo.NAME,
        "HANDLING",
        rollDiceTwo,
        characterTwo.HANDLING
      );
    }

    if (block === "Showdown") {
      let powerResultOne = rollDiceOne + characterOne.POWER;
      let powerResultTwo = rollDiceTwo + characterTwo.POWER;

      console.log(
        `${characterOne.NAME} battle against ${characterTwo.NAME} 🥊🥊`
      );

      await logRollResult(
        characterOne.NAME,
        "POWER",
        rollDiceOne,
        characterOne.POWER
      );
      await logRollResult(
        characterTwo.NAME,
        "POWER",
        rollDiceTwo,
        characterTwo.POWER
      );

      if (powerResultOne > powerResultTwo && characterTwo.SCORE > 0) {
        console.log(
          `${characterOne.NAME} wins the showndown! ${characterTwo.NAME} lose 1 point 🐢`
        );
        characterTwo.SCORE--;
      }
      if (powerResultTwo > powerResultOne && characterOne.SCORE > 0) {
        console.log(
          `${characterTwo.NAME} wins the showndown! ${characterOne.NAME} lose 1 point 🐢`
        );
        characterOne.SCORE--;
      }

      console.log(
        powerResultOne === powerResultTwo ? "It was a tie battle!" : ""
      );
    }

    if (testSkillOne > testSkillTwo) {
      console.log(`${characterOne.NAME} wins this round!`);
      characterOne.SCORE++;
    } else if (testSkillTwo > testSkillOne) {
      console.log(`${characterTwo.NAME} wins this round!`);
      characterTwo.SCORE++;
    } else {
      console.log("It`s a tie");
    }

    console.log("--------------------------------------------------");
  }
}

async function pickAWinner(characterOne, characterTwo) {
  console.log("Final result: ");
  console.log(`${characterOne.NAME}: ${characterOne.SCORE} point(s)`);
  console.log(`${characterTwo.NAME}: ${characterTwo.SCORE} point(s)`);

  if (characterOne.SCORE > characterTwo.SCORE) {
    console.log(`\n${characterOne.NAME} wins the race 🎈🎈 🏆`);
  } else if (characterTwo.SCORE > characterOne.SCORE) {
    console.log(`\n${characterTwo.NAME} wins the race 🎈🎈 🏆`);
  } else {
    console.log("\nIt was a tie race 😕😕😕");
  }
}

(async function main() {
  console.log(
    `🚨 🏁 Corrida entre ${playerOne.NAME} e ${playerTwo.NAME} comecando... \n`
  );

  await startRaceEngine(playerOne, playerTwo);
  await pickAWinner(playerOne, playerTwo);
})();
