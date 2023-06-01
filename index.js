import characterData from "./data/data.js";
import Character from "./utils/Character.js";

const wizard = new Character(characterData.hero);
const evilKnight = new Character(characterData.monster);

function attack() {
  wizard.getDiceHtml();
  evilKnight.getDiceHtml();

  wizard.takeDamage(evilKnight.currentDiceScore)
  evilKnight.takeDamage(wizard.currentDiceScore)
  render();
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();

  document.getElementById("monster").innerHTML = evilKnight.getCharacterHtml();
}

render();
