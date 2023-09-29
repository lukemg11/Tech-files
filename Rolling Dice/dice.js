function rollDice(){
    console.log('functionncalled')
    const randomNumber = document.createElement("p");
    randomNumber.textContent = Math.floor(Math.random() * 6) + 1;
    document.body.appendChild(randomNumber);
}
const button = document.querySelector('button')
button.addEventListener("click", rollDice);