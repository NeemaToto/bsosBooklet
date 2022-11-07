//5-While/Break and Do-While/Break

//5-1-0 While/Break
//5-1-1
var i = 0;
while (i<3) {
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
while (i<=5) {
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
while (i<= 5) {
console.log(i);
i+=2;
}
/**
*0
*2
*4
*/

//5-1-4
var i = 0;
while (i<=6) {
console.log(i);
i+=2;
}
/**
*0
*2
*4
*6
*/

//5-1-5
var i = 0;
while (i<=6) {
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
    i+=2;
} while(i<5);
/**
 * 0
 * 2
 * 4
*/

//5-2-3
var i = 1;

do{
    console.log(i);
    i+=2;
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
    j+=2;
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

console.log();