// jshint esversion: 7

let rollDie = () => Math.floor(Math.random() * 6) + 1;

let rollDice = function() {
    let userInput = document.getElementById("text").value;

    let num = parseInt(userInput, 10);
    if (typeof num == typeof 1 && 1<num && num <= 12){
        let rollCount = 0;
        let dice1 = 0, dice2 = 0;
        const MAX_ROLL = 99999; // Maximum number of rolls allowed

        while(true){
            dice1 = rollDie();
            dice2 = rollDie();
            rollCount+=1;

            let sum = dice1 + dice2;
            if (rollCount > MAX_ROLL || sum == num){
                break;
            }
        }

        if (dice1 + dice2 == num){
            let text =`You hit your number in ${rollCount} rolls!`;
            document.getElementById("result").innerHTML = text;

            document.getElementById("dice1").src=`dice-imgs/die${dice1}.gif`;
            document.getElementById("dice2").src=`dice-imgs/die${dice2}.gif`;

            console.log("d1 =" + " " + dice1 + " d2 = " + dice2);
            console.log(text);
            return rollCount;
        } else {
            return  MAX_ROLL;
        }

    }
    else {
        alert("Input invalid");

    }
};
