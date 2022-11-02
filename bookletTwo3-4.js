//3- For Loop

//3-1-1
for (var i = 0; i < 10; i++) {
        console.log(i);
}

console.log(`finished`);

//3-1-2
for (var k = 0; k <=15; k++) {
    console.log(k);
}
console.log(`Finished`);

//3-1-3
for (var k = 0; k <= 4; k+=2) {
    console.log(k);
}
console.log(`Finished`);

//3-1-4
for (var k = 2; k <=4; k++) {
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
for (var i = 0;  i < 10; i++) {
    if (i % 2 ==  1) {
        i +=3;
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
        i = Math.floor(Math.random() * (9-0 + 1)) + 0;
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
        i = Math.floor(Math.random() * (9-0 + 1)) + 0;
        console.log(`________`);
    } else if (i == 5) {
        i = 11;
    }
}

console.log(`Finished at the number ${i}`);




