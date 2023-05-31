
document.getElementById('hero').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Wizard </h4>
        <img class="avatar" src="./assets/images/playerwizard.jpg"/>
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container"><div class="dice"> 6 </div></div>
    </div>   
`

document.getElementById('monster').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Evil Knight</h4>
        <img class="avatar" src="./assets/images/evilKnight.jpg"/>
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container"><div class="dice"> 4 </div></div>
    </div>
`