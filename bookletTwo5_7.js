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

//