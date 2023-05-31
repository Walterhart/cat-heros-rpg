const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "./assets/images/playerwizard.jpg",
  health: 60,
  diceRoll: 6,
};

const monster = {
  elementId: "monster",
  name: "Evil Knight",
  avatar: "./assets/images/evilKnight.jpg",
  health: 10,
  diceRoll: 4,
};

function renderCharacter(characterData) {
  document.getElementById(
    characterData.elementId
  ).innerHTML = `<div class="character-card">
          <h4 class="name"> ${characterData.name} </h4>
          <img class="avatar" src="${characterData.avatar}"/>
          <p class="health">health: <b> ${characterData.health}</b></p>
          <div class="dice-container"><div class="dice"> ${characterData.diceRoll} </div></div>
      </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
