
import characterData from './data/data.js'

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}
function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}



function Character(data) {
  Object.assign(this, data);
  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = getDiceHtml(diceCount);

    return `
    <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;
  };
}

const wizard = new Character(characterData.hero);
const evilKnight = new Character(characterData.monster);

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();

  document.getElementById(evilKnight.elementId).innerHTML =
    evilKnight.getCharacterHtml();
}

render();
