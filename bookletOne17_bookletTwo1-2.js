//Booklet 1

//Objects + Console Log

//17-1
var student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    gpa:4.0
}

var sentence = `${student.firstName} ${student.lastName} is ${student.age} years old and has a ${student.gpa} GPA.`;

console.log(sentence);

//17-2
var student = {
    firstName: "Mark",
    lastName: "Jacob",
    age: 31,
    id: "A001234"
}

var sentence = `${student.firstName} ${student.lastName} is ${student.age} years old. The employee ID is ${student.id}.`

console.log(sentence);

//17-3
var p2 = new Object();

p2.name = "Steve";
p2.age = 12;

console.dir(p2);

//17-4
var toyotaCorolla = new Object();

toyotaCorolla.modeOne = "Sport";
toyotaCorolla.modeTwo = "EV";
toyotaCorolla.litre = 1.8;

console.dir(toyotaCorolla);

//17-5
var microsoft = new Object();

microsoft.laptop = "Surafe Laptop 4";
microsoft.screenInches = 13.4;
microsoft.memoryGb = 16;
microsoft.batteryLifeHours = 19;
microsoft.processor = "Quad Core 11th Intel Core i7-1185G7";

console.dir(microsoft)
console.log(microsoft.processor);

//17-6
var pet = new Object();

pet.name = "Max";
pet.age = 6;
pet.type = "Guinea pig";
pet.lifeSpan = 8;

console.dir(pet);
console.log(pet.age);

//17-7
var toyotaCorollaHybrid = new Object();

toyotaCorollaHybrid.mode = ["Sport", "EV"];
toyotaCorollaHybrid.litre = 1.8;
toyotaCorollaHybrid.valve = 16;
toyotaCorollaHybrid.cylinder = 4;

console.dir(toyotaCorollaHybrid);

var sentence=`The Toyota Corolla Hybrid is in ${toyotaCorollaHybrid.mode[0]} mode and can carry up to ${toyotaCorollaHybrid.litre} litres.`;

console.log(sentence);

//17-8
var home = new Object();

home.pets = [
    petOne = {
        name: "Max",
        type: "Guinea Pig",
        age: 6,
        lifeSpan: 8
    },
    petTwo = {
        name: "Mickey",
        type: "Budgie",
        age: 4,
        lifeSpan: 8
    }
]

console.dir(home);
console.log(`The second pets name is ${home.pets[1].name} and he is ${home.pets[1].age} years old.`)

//17-9
var home = new Object();

home.textBooks = [
    textBookOne = {
        title: `Design Pattern Elements of Reusable Object-Oriented Software`,
        authors: {"list" : ["Enrich Gamma", "Richard Helm", "Ralph Johnson", "John Vlisides"]},
        releaseDate: 1994
    },
    textBookTwo = {
        title: `Step by Step`,
        authors: {"list" : ["Steve Suehring"]} ,
        releaseDate: 2010
    }
]

console.dir(home.textBooks);
console.log(home.textBooks[0]);
console.log(home.textBooks[0].authors);
console.log(home.textBooks[0].authors[3]);

//You made a typo in the workbook where you want us to call the authors and release date of textbook one even though in the console log below we're talking about textbook 2.
console.log(`I will read JavaScript ${home.textBooks[1].title}. The author of the textbook is ${home.textBooks[1].authors}. It was released in ${home.textBooks[1].releaseDate}`);

//17-10
var microsoft = new Object();

microsoft.laptopTypes = [
    laptopOne = {
        laptop: "Laptop 4",
        screenInches: 13.4,
        memoryGb: 16,
        batteryLifeHours: 19,
        processor: "Quad Core 10th Intel Core i7-1185G7"
    },
    laptopTwo = {
        laptop: "Laptop 3",
        screenInches: 13.5,
        memoryGb: 16,
        batteryLifeHours: 11.1,
        processor: "Quad Core 10th Intel Core i7-1065G7"
    }
]

var firstSentence = `Laptop number one is the Microsoft ${microsoft.laptopTypes[0].laptop}. It has a screen that is ${microsoft.laptopTypes[0].screenInches} inches.`;
var secondSentence = `Laptop number two is the Microsft ${microsoft.laptopTypes[1].laptop}. It has a screen that is ${microsoft.laptopTypes[1].screenInches} inches.`;

console.log(firstSentence);
console.log(secondSentence);

//Booklet 2

//1 - If/Else and Functions

//1-1
var number = 10;
var sentence = "";

if (number == 10) {
    sentence = `You are right`;
} else {
    sentence = `You are wrong`;
}

console.log(sentence);

//1-2
var [hobby, city, message] = ["Gardening", "Vancouver", ""];

if (hobby == "Gardening") {
    message = `I live in ${city} and I like ${hobby}.`;
} else {
    message = `Not the right hobby.`;
}

console.log(message);

//1-3
var firstName = `Steve`, age = 14, country = `Canada`, message = ``;

var MINIMUM_AGE = 16;
var LEGAL_AGE_COUNTRY = "Canada";

if (age >= MINIMUM_AGE && country == LEGAL_AGE_COUNTRY) {
    message = `You are able to get your license`;
} else {
    message = `You are a minor`;
}

console.log(message);

//1-4
function findGrade(name, mark) {
    if (mark >= 85 && mark <= 100) {
        console.log(`${name}, you have recieved A grade.`);
    } else if (mark >= 70 && mark < 85) {
        console.log(`${name}, you have recieved B grade.`);
    } else if (mark >= 50 && mark < 70) {
        console.log(`${name}, you have recieved C grade.`);
    } else if (mark >= 0 && mark < 50) {
        console.log(`${name}, you have failed.`);
    } else {
        console.log(`Invalid mark of ${mark}.`);
    }
}

findGrade("Sarah", 91);//Sarah you recieved A grade.
findGrade("Geroge", 85);//George you recieved A grade.
findGrade("Sam", 75);//Sam you recieved B grade.
findGrade("Emily", 53);//Emily you recieved C grade.
findGrade("Tom", 20);//Tom you have failed.
findGrade("Wilson", 120);//Invalid mark of 120.

//1-5
function evalNumbers(num1, num2, operator) {
    if (operator == "add") {
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}.`);
    } else if (operator == "subtract") {
        console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}.`);
    } else if (operator == "multiply") {
        console.log(`Product of ${num1} and ${num2} is ${num1 * num2}.`);
    } else if (operator == "divide") {
        console.log(`Division of ${num1} + ${num2} is ${num1 / num2}.`);
    } else if (operator == "modulus") {
        console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}.`);
    } else {
        console.log(`${operator} is an invalid operation.`);
    }
}

evalNumbers(15, 10, "add");//Sum of 15 and 10 is 25.
evalNumbers(20, 8, "subtract");//Difference of 20 and 8 is 12.
evalNumbers(12, 4, "multiply");//Product of 12 and 4 is 48.
evalNumbers(28, 7, "divide");//Division of 28 and 7 is 4.
evalNumbers(22, 3, "modulus");//Modulus of 22 and 3 is 1.
evalNumbers(31, 3, "square");//Square is an invalid operation.

//1-6
var num = 12;
var message = "";

if (num > 12) {
    sentence = `Your number is too high.`;
} else if (num == 12) {
    sentence = `You guessed correct!`;
} else {
    sentence = `Your nmber is too low.`;
}

console.log(sentence); //You guessed correct!

//1-7
var num = Math.floor(Math.random() * (20 - 0 + 1) + 0);
var message = ``;

if (num > 12) {
    message = `Your number is too high.`;
} else if (num == 12) {
    message = `You guessed correct!"`
} else {
    message = `Your number is too low.`
}

console.log(message);

//1-8

function isValidNumber(num) {
    if (isNaN(num)) {
        console.log(`${num} is not a number.`);
    } else {
        console.log(`${num} is a valid number.`)
    }
}

isValidNumber(21); //21 is a valid number.
isValidNumber(7); //7 is a valid number.
isValidNumber("Abc"); //Abc is not a number.
isValidNumber(12.5); //12.5 is a valid number.
isValidNumber("21M");//21M is not a number.

//2 - Error Handling

//2-1
var person = ``;
var message = ``;

try {
    if (person.length == 0) {
        throw `empty`;
    } 
    if (person.name == "Bob") {
        console.log(`Message matched.`)
    }
} catch (err) {
    console.log(`The person variable is ${err}`);
}

//2-2 
var person = "Bob";
var message = "";

try {
    if (person.length == 0) {
        throw `empty`;
    }
    if (person == "Bob") {
        console.log(`Message matched.`)
    }
}catch(err) {
    console.log(`The person variable is ${err}`);
} finally {
    console.log(`Finished checking.`);
}


