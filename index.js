import characterData from "./data/data.js";
import Character from "./utils/Character.js";

let monstersArray = ["evilKnight", "evilFighter"];
let isWaiting = false;

// Get a new monster from the character data
const getNewMonster = () => {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
};

// Handle the attack action
const attack = () => {
  if (!isWaiting) {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1500);
      } else {
        endGame();
      }
    }
  }
};

// Handle the end of the game
const endGame = () => {
  isWaiting = true;
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "Both died - no one wins"
      : wizard.health > 0
      ? "Hero wins"
      : "Monster wins";
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  document.body.innerHTML = `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`;
};

document.getElementById("attack-button").addEventListener("click", attack);

// Render the characters on the screen
const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

// Initialize the wizard character and the first monster
const wizard = new Character(characterData.hero);
let monster = getNewMonster();

render();
