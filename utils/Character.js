import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  this.maxHealth = this.health;

  this.diceArrayHtml = getDicePlaceholderHtml(this.diceCount);

  this.setDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArrayHtml = this.currentDiceScore
      .map((score) => {
        return `<div class="dice">${score}</div>`;
      })
      .join("");
  };

  this.takeDamage = (attackScoreAttack) => {
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

  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth);

    return `
    <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
        style="width: ${percent}%;">
        </div>
    </div>`;
  };

  this.getCharacterHtml = () => {
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
