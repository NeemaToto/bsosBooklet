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