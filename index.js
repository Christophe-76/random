let counter = 1;
const playerName = prompt("what's your name?");
const random = Math.floor(Math.random() * 100) + 1;
let number = parseInt(prompt("pick a number between 1 and 100"));
// console.log (random);

while(random != number){
    if (isNaN (number)) {
        number = parseInt(prompt("Select number, not string"));
    }
    else if (number > random){
        number = parseInt(prompt("It's less, try again!"));
    } 
    if (number < random) {
        number = parseInt(prompt("It's more, try again!"));   
    }
    console.log (number);
    counter++;
    }
console.log(playerName + " " + "won in " + counter + " tries");
alert(playerName + " " + "wins in " + counter);
