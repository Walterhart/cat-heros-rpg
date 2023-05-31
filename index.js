
import characterData from './data/data.js'
import Character  from './utils/Character.js'

const wizard = new Character(characterData.hero);
const evilKnight = new Character(characterData.monster);

function render() {
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();

  document.getElementById(evilKnight.elementId).innerHTML =
    evilKnight.getCharacterHtml();
}

render();
