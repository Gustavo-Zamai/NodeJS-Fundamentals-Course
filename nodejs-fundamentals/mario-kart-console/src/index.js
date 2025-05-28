const characters = [
  {
    NAME: "Mario",
    SPEED: 4,
    HANDLING: 3,
    POWER: 3,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Luigi",
    SPEED: 3,
    HANDLING: 4,
    POWER: 4,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Peach",
    SPEED: 2,
    HANDLING: 5,
    POWER: 2,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Toad",
    SPEED: 2,
    HANDLING: 4,
    POWER: 5,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Yoshi",
    SPEED: 1,
    HANDLING: 2,
    POWER: 3,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Bowser",
    SPEED: 3,
    HANDLING: 2,
    POWER: 5,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Donkey Kong",
    SPEED: 1,
    HANDLING: 3,
    POWER: 5,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Wario",
    SPEED: 2,
    HANDLING: 3,
    POWER: 5,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Daisy",
    SPEED: 3,
    HANDLING: 2,
    POWER: 2,
    SCORE: 0,
    POWER_UP: null,
  },
  {
    NAME: "Koopa Troopa",
    SPEED: 3,
    HANDLING: 4,
    POWER: 3,
    SCORE: 0,
    POWER_UP: null,
  },
];

// Function to get two distinct random players
async function getRandomPlayers(characters) {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
  }
  
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
  
  async function getRandomPowerUp() {
    const powerUps = ["BOOST", "SHIELD", "TURBO", "SHELL", "BOMB"];
    const randomIndex = Math.floor(Math.random() * powerUps.length);
    return powerUps[randomIndex];
  }
  
  function applyPowerUp(player, roll) {
    switch (player.POWER_UP) {
      case "BOOST":
        console.log(`${player.NAME} uses BOOST! +2 on roll 🚀`);
        roll += 2;
        player.POWER_UP = null;
        break;
  
      case "TURBO":
        console.log(`${player.NAME} uses TURBO! +1 SPEED ⚡`);
        player.SPEED += 1;
        player.POWER_UP = null;
        break;
  
      case "SHIELD":
        console.log(`${player.NAME} has SHIELD active 🛡️`);
        break;
  
      case "SHELL":
        console.log(`${player.NAME} prepares a SHELL attack 🐢`);
        break;
  
      case "BOMB":
        console.log(`${player.NAME} prepares a BOMB attack 💣`);
        break;
    }
    return roll;
  }
  
  async function logRollResult(characterName, attributeName, rollDice, attributeValue) {
    console.log(
      `${characterName} 🎲 rolled ${rollDice} + ${attributeName} (${attributeValue}) = ${rollDice + attributeValue}`
    );
  }
  
  async function startRaceEngine(characterOne, characterTwo) {
    const TOTAL_ROUNDS = 3;
  
    characterOne.POWER_UP = await getRandomPowerUp();
    characterTwo.POWER_UP = await getRandomPowerUp();
  
    console.log(`${characterOne.NAME} received power-up: ${characterOne.POWER_UP || "None"}`);
    console.log(`${characterTwo.NAME} received power-up: ${characterTwo.POWER_UP || "None"}`);
  
    for (let round = 1; round <= TOTAL_ROUNDS; round++) {
      console.log(`🏁 Round ${round}`);
      const block = await getRandomBlock();
      console.log(`Section: ${block}`);
  
      let rollDiceOne = await rollDice();
      rollDiceOne = applyPowerUp(characterOne, rollDiceOne);
  
      let rollDiceTwo = await rollDice();
      rollDiceTwo = applyPowerUp(characterTwo, rollDiceTwo);
  
      let testSkillOne = 0;
      let testSkillTwo = 0;
  
      if (block === "Straight") {
        testSkillOne = rollDiceOne + characterOne.SPEED;
        testSkillTwo = rollDiceTwo + characterTwo.SPEED;
  
        await logRollResult(characterOne.NAME, "SPEED", rollDiceOne, characterOne.SPEED);
        await logRollResult(characterTwo.NAME, "SPEED", rollDiceTwo, characterTwo.SPEED);
  
      } else if (block === "Turn") {
        testSkillOne = rollDiceOne + characterOne.HANDLING;
        testSkillTwo = rollDiceTwo + characterTwo.HANDLING;
  
        await logRollResult(characterOne.NAME, "HANDLING", rollDiceOne, characterOne.HANDLING);
        await logRollResult(characterTwo.NAME, "HANDLING", rollDiceTwo, characterTwo.HANDLING);
  
      } else if (block === "Showdown") {
        const powerOne = rollDiceOne + characterOne.POWER;
        const powerTwo = rollDiceTwo + characterTwo.POWER;
  
        console.log(`${characterOne.NAME} battles ${characterTwo.NAME} 🥊`);
  
        await logRollResult(characterOne.NAME, "POWER", rollDiceOne, characterOne.POWER);
        await logRollResult(characterTwo.NAME, "POWER", rollDiceTwo, characterTwo.POWER);
  
        if (powerOne > powerTwo && characterTwo.SCORE > 0) {
          console.log(`${characterOne.NAME} wins the showdown! ${characterTwo.NAME} loses 1 point 🐢`);
          characterTwo.SCORE = Math.max(characterTwo.SCORE - 1, 0);
  
          if (characterOne.POWER_UP === "SHELL") {
            if (characterTwo.POWER_UP !== "SHIELD") {
              characterTwo.SCORE = Math.max(characterTwo.SCORE - 2, 0);
              console.log(`${characterOne.NAME} uses SHELL! ${characterTwo.NAME} loses 2 points 🐢`);
            } else {
              console.log(`${characterTwo.NAME} blocked the SHELL with SHIELD! 🛡️`);
            }
            characterOne.POWER_UP = null;
          }
  
          if (characterOne.POWER_UP === "BOMB") {
            if (characterTwo.POWER_UP !== "SHIELD") {
              const lostPoints = Math.min(3, characterTwo.SCORE);
              characterTwo.SCORE = Math.max(characterTwo.SCORE - lostPoints, 0);
              console.log(`${characterOne.NAME} uses BOMB! 💣 ${characterTwo.NAME} loses ${lostPoints} point(s)!`);
            } else {
              console.log(`${characterTwo.NAME} blocked the BOMB with SHIELD! 🛡️`);
            }
            characterOne.POWER_UP = null;
          }
  
        } else if (powerTwo > powerOne && characterOne.SCORE > 0) {
          console.log(`${characterTwo.NAME} wins the showdown! ${characterOne.NAME} loses 1 point 🐢`);
          characterOne.SCORE = Math.max(characterOne.SCORE - 1, 0);
  
          if (characterTwo.POWER_UP === "SHELL") {
            if (characterOne.POWER_UP !== "SHIELD") {
              characterOne.SCORE = Math.max(characterOne.SCORE - 2, 0);
              console.log(`${characterTwo.NAME} uses SHELL! ${characterOne.NAME} loses 2 points 🐢`);
            } else {
              console.log(`${characterOne.NAME} blocked the SHELL with SHIELD! 🛡️`);
            }
            characterTwo.POWER_UP = null;
          }
  
          if (characterTwo.POWER_UP === "BOMB") {
            if (characterOne.POWER_UP !== "SHIELD") {
              const lostPoints = Math.min(3, characterOne.SCORE);
              characterOne.SCORE = Math.max(characterOne.SCORE - lostPoints, 0);
              console.log(`${characterTwo.NAME} uses BOMB! 💣 ${characterOne.NAME} loses ${lostPoints} point(s)!`);
            } else {
              console.log(`${characterOne.NAME} blocked the BOMB with SHIELD! 🛡️`);
            }
            characterTwo.POWER_UP = null;
          }
  
        } else {
          console.log("It was a tie battle!");
        }
      }
  
      if (testSkillOne > testSkillTwo) {
        console.log(`${characterOne.NAME} wins the round!`);
        characterOne.SCORE++;
      } else if (testSkillTwo > testSkillOne) {
        console.log(`${characterTwo.NAME} wins the round!`);
        characterTwo.SCORE++;
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
    const [playerOne, playerTwo] = await getRandomPlayers(characters);
    console.log(`🚨 🏁 Race between ${playerOne.NAME} and ${playerTwo.NAME} is about to begin... \n`);
    await startRaceEngine(playerOne, playerTwo);
    await pickAWinner(playerOne, playerTwo);
  })();