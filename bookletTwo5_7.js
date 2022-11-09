//5-While/Break and Do-While/Break

//5-1-0 While/Break
//5-1-1
var i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
/** 
*0
*1
*2
*/

//5-1-2
var i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
/**
*0
*1
*2
*3
*4
*5
*/

//5-1-3
var i = 0;
while (i <= 5) {
    console.log(i);
    i += 2;
}
/**
*0
*2
*4
*/

//5-1-4
var i = 0;
while (i <= 6) {
    console.log(i);
    i += 2;
}
/**
*0
*2
*4
*6
*/

//5-1-5
var i = 0;
while (i <= 6) {
    if (i % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
    i++;
}

/**
*even
*odd
*even
*odd
*even
*odd
*even 
*/

//5-1-6
var i = 0;
var proceed = true;
console.log(`Start. The value is ${proceed}.`);

while (proceed) {
    if (i == 3) {
        proceed = false;
    }
    i++;
}
console.log(`Done. The value is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The value is false and the number ended at 4

//5-1-7
var i = 0;
var proceed = true;

console.log(`Start. The value is ${proceed}`);

while (proceed) {
    if (i == 3) {
        proceed = false;
        break;
    }
    i++;
}

console.log(`Done. The value is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The value is false and the number ended at 3.

//5-1-8
var i = 0;
var proceed = true;

console.log(`Start. The value is ${proceed}`);

while (proceed) {
    if (i == 4) {
        proceed = false;
        break;
    }
    i++;
}

console.log(`Done. The value is ${proceed} and the number ended at ${i}.`);
//Start. The value is true.
//Done. The value is false and the number ended at 4.

//5-1-9
console.log(`+=+=+=+=+ROCK PAPER SCISSORS+=+=+=+=+`)
console.log(`-----`)
console.log(`Game Rules:\n~Two players only\n~Release your weapon right after scissors!\n~Best of three\n~Good luck!`)
console.log(`-----`)

var playerOne; 
var playerTwo; 
var round = 1;
var scoreP1 = 0;
var scoreP2 = 0;

do {
 /**
    * @desc random number generator for rockpaperscissors game
    * @param {*} minimum the minimum value needed for random number generator
    * @param {*} maximum the maximum value needed for random number generator
    * @returns a random number between min and max
*/
function randomNumber(minimum, maximum){
        return Math.floor((Math.random()*maximum) + minimum);
    }
    
playerOne = randomNumber(1,3);
playerTwo = randomNumber(1,3); 

if (playerOne == 1) {
    playerOne = "Rock";
} else if (playerOne == 2) {
    playerOne = "Paper";
} else {
    playerOne = "Scissors";
}

if (playerTwo == 1) {
    playerTwo = "Rock";
} else if (playerTwo == 2) {
    playerTwo = "Paper";
} else {
    playerTwo = "Scissors";
}

console.log(`Round: ${round}`);
console.log(`Rock...paper...scissors!`)
console.log(`Player One: ${playerOne}`)
console.log(`Player Two: ${playerTwo}`);

//Rock
if (playerOne == "Rock" && playerTwo == "Rock") {
    console.log(`It's a tie! No points this round!`)
    round++;
} else if (playerOne == "Rock" && playerTwo == "Paper") {
    console.log(`Player One loses. Player Two wins!`);
    scoreP2++;
    round++;
} else if (playerOne == "Rock" && playerTwo == "Scissors") {
    console.log(`Player Two loses. Player One wins!`);
    scoreP1++;
    round++;
}

//Paper
if (playerOne == "Paper" && playerTwo == "Paper") {
    console.log(`It's a tie! No points this round!`)
    round++;
} else if (playerOne == "Paper" && playerTwo == "Scissors") {
    console.log(`Player One loses. Player Two wins!`);
    scoreP2++;
    round++;
} else if (playerOne == "Paper" && playerTwo == "Rock") {
    console.log(`Player Two loses. Player One wins!`);
    scoreP1++;
    round++;
}

//Scissors
if (playerOne == "Scissors" && playerTwo == "Scissors") {
    console.log(`It's a tie! No points this round!`)
    round++;
} else if (playerOne == "Scissors" && playerTwo == "Rock") {
    console.log(`Player One loses. Player Two wins!`);
    scoreP2++;
    round++;
} else if (playerOne == "Scissors" && playerTwo == "Paper") {
    console.log(`Player Two loses. Player One wins!`);
    scoreP1++;
    round++;
}

if (scoreP1 == 2 && round < 4) {
    round=4;
} else if (scoreP1 == 2 && round < 4) {
    round=4;
}

console.log(`-----`)
} while (round <=3)

if (scoreP1 >= 2) {
    console.log(`Player One wins the game! Congrats!\n-----\nScore:\nPlayer One: ${scoreP1}\nPlayer Two: ${scoreP2}`)
} else if (scoreP2 >= 2) {
    console.log(`Player Two wins the game! Congrats!\n-----\nScore:\nPlayer One: ${scoreP1}\nPlayer Two: ${scoreP2}`)
} else {
    console.log(`The game was a tie! So boring!\n-----\nScore:\nPlayer One: ${scoreP1}\nPlayer Two: ${scoreP2}`)
}
console.log(`-----`);
console.log(`+=+=+=+=+END OF GAME+=+=+=+=+`)




//5-2-0 Do-While/Break

//5-2-1
var i = 0;

do {
    console.log(i);
    i++;
} while (i < 5)
/**
 * 0
 * 1
 * 2
 * 3
 * 4
*/

//5-2-2
var i = 0;

do {
    console.log(i);
    i += 2;
} while (i < 5);
/**
 * 0
 * 2
 * 4
*/

//5-2-3
var i = 1;

do {
    console.log(i);
    i += 2;
} while (i < 5);
/**
 * 1
 * 3
*/

//5-2-4
var i = 1;
var proceed = true;

do {
    console.log(i);
    if (i == 3) {
        break;
    }
    i++;
} while (proceed);
/**
 * 1
 * 2
 * 3
*/

//5-2-5
var i = 1;
var j = 0;

do {
    console.log(`The value is ${i}.`);
    console.log(`The value is ${j}.`);

    if (i == j) {
        break;
    }
    i++;
    j += 2;
} while (i < 5);
//The value is 1.
//The value is 0.
//The value is 2.
//The value is 2.

//7-Ternary Operators
//7-1
var fname = "George";
var beverage = fname === "Fred" ? "true" : "false";

console.log(beverage);
//false

//7-2
var fname = "Fred";
var beverage = fname === "Fred" ? "true" : "false";
console.log(beverage);
//true

//7-3
var age = 20;
var beverage = age === 21 ? "beer" : "juice";

console.log(beverage);
//juice

//7-4

function hello() {
    console.log("Hello person.");
}

function goodbye() {
    console.log("Goodbye person.");
}

var authenticated = true;

authenticated ? hello() : goodbye();
//Hello person.

//7-5
function getFee(isMember) {
    return (isMember ? "$3.00" : "$15.00");
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));
//$3.00
//$15.00
//$15.00

//7-6
//Screenshot Provided

//7-7
//Screenshot Provided