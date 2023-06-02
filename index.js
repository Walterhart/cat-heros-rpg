import characterData from "./data/data.js";
import Character from "./utils/Character.js";


const attack = () => {
  wizard.getDiceHtml();
  evilKnight.getDiceHtml();
  wizard.takeDamage(evilKnight.currentDiceScore);
  evilKnight.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || evilKnight.dead) {
    endGame();
  }
}

const endGame = () => {
  const endMessage =
    wizard.health === 0 && evilKnight.health === 0
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
}
document.getElementById("attack-button").addEventListener("click", attack);

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();

  document.getElementById("monster").innerHTML = evilKnight.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
const evilKnight = new Character(characterData.monster);
render();
