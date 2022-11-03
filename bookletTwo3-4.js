//3- For Loop

//3-1-1
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`finished`);

//3-1-2
for (var k = 0; k <= 15; k++) {
    console.log(k);
}
console.log(`Finished`);

//3-1-3
for (var k = 0; k <= 4; k += 2) {
    console.log(k);
}
console.log(`Finished`);

//3-1-4
for (var k = 2; k <= 4; k++) {
    console.log(k);
}
console.log(`Finished`);

//3-1-5
var text = ``;

for (var i = 0; i < 7; i++) {
    if (i == 5) {
        text += `Finished`;
        break;
    }
}

console.log(`${text} at the number 5`);

//3-1-6
for (var i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        i += 3;
    }
    console.log(i);
}
console.log(`The number stopped at ${i}.`);

//3-1-7
var person = `bob`;

for (var i = 0; i < 10; i++) {
    if (i == 4 && person == `bob`) {
        console.log(`The person ${person.charAt(0).toUpperCase() + person.slice(1)} has been selected`);
        break;
    }
}
console.log(`The number stopped at the value ${i}.`);

//3-1-8
var text = ``;

for (var i = 0; i < 10; i++) {
    if (i == 3) {
        text += `Finished`;
        break;
    } else if (i == 5) {
        i++
    }
}

console.log(`${text} at the number ${i}`);

//3-1-9 
var text = ``;

for (var i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        console.log(`Not divisible by 2. The number is ${i}.`);
    }
}

console.log(`Finished loop.`);

//3-1-10
var text = ``;

for (var i = 0; i < 10; i++) {
    if (i % 3 == 1 || i % 3 == 2) {
        console.log(`Not divisible by 3. The number is ${i}.`);
    }
}

console.log(`Finished Loop`);

//3-1-11
ext = ``;

for (var i = 0; i < 10; i++) {
    if (i % 3 == 1 || i % 3 == 2) {
        console.log(`Not divisible by 3. The number is ${i}`);
    } else if (i % 2 == 1) {
        console.log(`Not divisible by 2. The number is ${i}`);
    } else {
        console.log(`It is divisible 2 and 3. The number is ${i}`);
    }
}

console.log(`Finished the loop.`);

//3-1-12
var drinks = [`pepsi`, `cola`, `orange juice`, `water`];
var num = 0;

for (var i = 0; i < 10; i++) {
    if (drinks[i] == `cola`) {
        num = i + 1;
        console.log(`Cola is in the ${num} position`);
        break;
    }
}
console.log(`Finished Loop`);

//3-1-13 
var text = ``;

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 3) {
        i++;
    } else if (i == 5) {
        text += `Finished`;
        break;
    }
}

console.log(`${text} at the number ${i}.`);

//3-1-14
var text = ``;

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 3) {
        i = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    } else if (i == 5) {
        text += `Finished`;
        break;
    }
}

console.log(`${text} at the value ${i}.`);

//3-1-15
var text = ``;

for (var i = 0; i < 10; i++) {
    if (i == 3) {
        i = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        console.log(`________`);
    } else if (i == 5) {
        i = 11;
    }
}

console.log(`Finished at the number ${i}`);

//3-2-0 For-In

//3-2-1
var person = {
    fname: "Kenny",
    Iname: "James",
    age: 22
}

var text = ``;

for (var x in person) {
    text += person[x] + ` `;
}

console.log(text);

//3-2-2
var person = {
    fname: "Jenn",
    activity: "ski"
}

var text = ``;

for (var x in person) {
    if (x == "fname") {
        text += `${person[x]} likes to `;
    }

    if (x == "activity") {
        text += `${person[x]}.`;
    }
}

console.log(text);

//3-2-3
var person = {
    fname: "Jenn",
    pet: "dog"
}

var text = ``;

for (var x in person) {
    if (x == "fname") {
        text += `${person[x]} has a pet `
    }

    if (x == "pet") {
        text += `${person[x]}.`
    }
}

console.log(text);

//3-2-4 Booklet says 13.4, answer key says 13.5 for screen size
var computer = {
    brand: `Microsoft`,
    laptop: `Surface Laptop 4`,
    screen: `13.4"`
}

var text = ``;

for (var item in computer) {
    if (item == `brand`) {
        text += `I am getting a ${computer[item]} `;
    }

    if (item == `laptop`) {
        text += `${computer[item]} `;
    }

    if (item == `screen`) {
        text += `and it has a screen size of ${computer[item]}.`;
    }
}

console.log(text);

//3-2-5
var computer = {
    brand: `Microsoft`,
    laptop: `Surface Laptop 4`,
    screen: `13.5"`
}

for (var item in computer) {
    if (item == `brand` || item == `laptop`) {
        console.log(item);
    }
}

//3-2-6
var computer = {
    brand: `Microsoft`,
    laptop: `Surface Laptop 4`,
    screen: `13.5"`
}

var sentence = `I will get the `;

for (var item in computer) {
    if (item == `brand` || item == `laptop`) {
        sentence += `${computer[item]} `;
    }
}

console.log(`${sentence}.`);

//3-2-7 The console log answer in answerbook is wrong
var person = {
    fname: "Jim",
    lname: "Mcdonald",
    age: 29
}

var txt = "";

for (var x in person) {
    txt += `${person[x]} `;
}

console.log(txt);

//3-2-8
var computer = {
    brand: "Microsoft",
    laptop: "Surface Laptop 4",
    screen: `13.5"`,
    displayPorts: ["USB-C", "Surface Connect"]
}

for (var item in computer) {
    if (typeof computer[item] === "object") {
        console.log(`The display ports are ${computer[item][0]} and ${computer[item][1]}.`)
    }
}

//3-3-0 For/Of

//3-3-1
var colours = ["red", "green", "blue"];
var text = ``;

for (var x of colours) {
    text += `${x} \n`
}

console.log(text);

//3-3-2
var cables = ["hdmi", "microb", "type-c", "type-a"];

var text = "";

for (var x of cables) {
    text += `${x} \n`;
}
console.log(text);

//3-3-3

var summerActivites = ["hiking", "surfing", 'swimming'];

var sentence = "";

for (var activity of summerActivites) {
    sentence += `${activity} \n`;
}

console.log(sentence);

//3-3-4
var summer = [["hiking", "surfing", "swimming"],[28,30,32]]; 
var sentence = "";

for (var x of summer) {
    sentence += `${x}\n`;
}

console.log(sentence);
/* 
hiking,surfing,swimming
28,30,32
**/

//4-Switch

//4-1
var num = 3;
var text = "";

switch (num) {
    case 2:
        text = `You guessed the number ${num}.`;
        break;
    case 3:
        text = `You  guessed the number ${num}.`;
        break;
    default:
        text = `Try again next time!`; 
}

console.log(text)

//4-2
var person = "Jim";
var text = "";

switch (person) {
    case "Peter":
        text = `You guessed ${person}!`;
        break;
    case "Jim":
        text = `You guessed ${person}!`;
        break;
    default:
        text = `Try again next time!`;
}

console.log(text);

//4-3
var text;

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is the Weekend.";
        break;
    case 0:
    case 6:
        text = "It is the Weekend.";
        break;
    default:
    text = "I cannot wait to sleep in on the weekend.";
    }

    console.log(text);

//4-4
var light = 0;
var text = "";

switch (light) {
    case 0:
        text ="off";
        break;
    case 1:
        text="On";
        break;
    default:
        text = `No value found`;
}

console.log(`The light is ${text}.`);