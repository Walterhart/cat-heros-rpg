import characterData from "./data/data.js";
import Character from "./utils/Character.js";

let monstersArray = ["evilKnight", "evilFighter"];

const getNewMonster = () => {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
};

const attack = () => {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();

  if (wizard.dead) {
    endGame();
  } else if (monster.dead) {
    if (monstersArray.length > 0) {
      monster = getNewMonster();
      render();
    } else {
      endGame();
    }
  }
};

const endGame = () => {
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "Both died - no one wins"
      : wizard.health > 0
      ? "Hero wins"
      : "Monster wins";
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  document.body.innerHTML = document.body.innerHTML = `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`;
};
document.getElementById("attack-button").addEventListener("click", attack);

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();

  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

const wizard = new Character(characterData.hero);
let monster = getNewMonster();

render();
