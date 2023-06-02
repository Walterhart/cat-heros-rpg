import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

    this.maxHealth = this.health;

    this.diceArrayHtml = getDicePlaceholderHtml(this.diceCount);
  }

  // Set the HTML representation of the character's dice rolls
  setDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArrayHtml = this.currentDiceScore
      .map((score) => {
        return `<div class="dice">${score}</div>`;
      })
      .join("");
  };

  // Reduce character's health based on the attack score
  takeDamage = (attackScoreAttack) => {
    const totalAttackScore = attackScoreAttack.reduce(
      (totalAttackScore, attackScore) => {
        return totalAttackScore + attackScore;
      }
    );
    this.health -= totalAttackScore;

    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  // Get the HTML representation of the character's health bar
  getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth);

    return `
    <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
        style="width: ${percent}%;">
        </div>
    </div>`;
  };

  // Get the HTML representation of the character
  getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceArrayHtml } = this;
    const healthBar = this.getHealthBarHtml();
    return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>    
                ${healthBar}
                <div class="dice-container">
                    ${diceArrayHtml}
                </div>
            </div>`;
  };
}

export default Character;
