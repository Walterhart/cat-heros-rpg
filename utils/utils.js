// Generate an array of dice rolls based on the dice count
const getDiceRollArray = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
};

// Generate HTML placeholders for dice
const getDicePlaceholderHtml = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => `<div class="placeholder-dice"></div>`)
    .join("");
};

// Calculate the percentage based on remaining health and maximum health
const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
