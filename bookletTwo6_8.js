//6-Arrays
//6-1-0-Sort

//6-1-1
var cars = ["BMW", "Toyota", "Buick", "Ford"]
cars.sort();

console.log(cars);
//[ 'BMW', 'Buick', 'Ford', 'Toyota' ]

//6-1-2
var electronics = ["Mouse", "Monitor", "Cables", "Laptop"];
electronics.sort();

console.log(electronics);
//[ 'Cables', 'Laptop', 'Monitor', 'Mouse' ]

//6-1-3
var departments = ["Finance", "Marketing", "Graphic Design", "IT"];
departments.sort();

console.log(departments);
//[ 'Finance', 'Graphic Design', 'IT', 'Marketing' ]

//6-2-0-Reverse

//6-2-1
var cars = ["BMW", "Toyota", "Buick", "Ford"];
cars.reverse();

console.log(cars);
//[ 'Ford', 'Buick', 'Toyota', 'BMW' ]

//6-2-2
var electronics = ["Mouse", "Monitor", "Cables", "Laptop"];
electronics.reverse();

console.log(electronics);
//[ 'Laptop', 'Cables', 'Monitor', 'Mouse' ]

//6-2-3
var departments = ["Finance", "Marketing", "Graphic Design", "IT"];
departments.reverse();

console.log(departments);
//[ 'IT', 'Graphic Design', 'Marketing', 'Finance' ]

//6-3-0-For Each

//6-3-1
var school = ["BCIT", "UBC", "SFU"];

school.forEach(element => console.log(element));
//BCIT
//UBC
//SFU

//6-3-2
var electronics = ["Mouse", "Keyboard", "Monitor"];

electronics.forEach(e => console.log(e));
//Mouse
//Keyboard
//Monitor

//6-3-3
var summerActivites = ["Hiking", "Biking", "Swimming"];

summerActivites.forEach(activity => console.log(activity));
//Hiking
//Biking
//Swimming

//6-3-4 Booklet doesn't ask to console.log "runs"
var items = [1,3,/*empty*/ ,7];
var runs = 0;

items.forEach((element) => {
    console.log(element);
    runs++;
});

console.log(runs);
//1
//3
//7
//3

//6-4-0-Map

//6-4-1
var arr = [1,4,9,16];

var check = arr.map(x => console.log(x));
//1
//4
//9
//16

//6-4-2
var arr = [1,4,9,16];

arr.map(x => console.log(x*2));
//2
//8
//18
//32

//6-4-3
var electronics = ["Keyboard","Mouse","Monitor"];

electronics.map(x => console.log(x));
//Keyboard
//Mouse
//Monitor

//6-4-4
var array1 = [1,4,9,16];

array1.map((x, index) => console.log(`The number is ${x}. Then the index is ${index}`));
//The number is 1. Then the index is 0
//The number is 4. Then the index is 1
//The number is 9. Then the index is 2
//The number is 16. Then the index is 3

//6-4-5
var electronics = ["Mouse", "Keyboard", "Monitor"];

electronics.map((x, index) => console.log(`The items is a ${x}. Then the index is ${index}.`));
//The items is a Keyboard. Then the index is 0.
//The items is a Mouse. Then the index is 1.
//The items is a Monitor. Then the index is 2.

//6-4-6
var bankAccount = [{key: 1, value: 100}, {key: 2, value: 200}, {key: 3, value: 300}];

bankAccount.map(({key, value}) => (console.log(`[${key}]: ${value}`)));
//[1]: 100
//[2]: 200
//[3]: 300

//6-4-7
var numbers = [1,2,3,4];

var filteredNumbers = numbers.map((num, index) => {
    if (index < 3) {
        return num;
    }
});

console.log(filteredNumbers);
//[ 1, 2, 3, undefined ]

//6-4-8
var electronics = new Map();

electronics.set("laptop", 1000);
electronics.set("mouse", 5);
electronics.set("keyboard", 10);

console.log({electronics});
/**
 * {
 * electronics: Map(3) { 'laptop' => 1000, 'mouse' => 5, 'keyboard' => 10 }
 * }
*/

//6-4-9
var electronics = new Map();

electronics.set("laptop", 1000);
electronics.set("mouse", 5);
electronics.set("keyboard", 10);

electronics.delete("keyboard");

console.log({electronics})
//Map(2) { 'laptop' => 1000, 'mouse' => 5 }

//6-4-10
var electronics = new Map();

electronics.set("laptop", 1000);
electronics.set("mouse", 5);
electronics.set("keyboard", 10);

console.log(electronics.size);
//3

//8-JSON

//8-1
/** Need to be in JSON file or error
{
    "employees": [
        {"firstName": "George", "lastName": "Rod"},
        {"firstName": "Wilson", "lastName": "Quan"},
        {"firstName": "Tim", "lastName": "Bern"}
    ]
}

//8-2
{
    "pets": [
        {"firstName": "Tim", "type": "dog"},
        {"firstName": "Sally", "type": "cat"},
        {"firstName": "Fred", "type": "bird"}
    ]
}

//8-3
{
    "termOne": [
        {"department":"COMM", "className": "Communication for Digital Design and Development"},
        {"department":"COMP", "className": "Fundamental Frontend Web Technologies"},
        {"department":"MDIA", "className": "Vector Graphics 1"}
    ]
}
*/

//8-4
var json = '{"name": "Peter", "age": 22, "country": "United States"}';
var obj = JSON.parse(json);

console.log(obj.name);

//8-5
var json = '{"name": "Kelly", "age": 20, "country": "United States"}';
var obj = JSON.parse(json);

console.log(`${obj.name} is ${obj.age} years old and he lives in the ${obj.country}.`);

//8-6
var json = '{"firstName: "John", "lastName": "Franco", "employeeId": "A0012345"}';
var obj = JSON.parse(json);

console.log(`${obj.firstName} ${obj.lastName}'s employee ID is ${obj.employeeID}.`);

//8-7
var json = '{"name": "Kelly", "age": 18, "country": "United States"}';
var obj = JSON.parse(json);

if (obj.age > 20) {
    console.log(`${obj.name} lives on his own.`)
}