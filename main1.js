// log a statement using console.log()
// console.log('Hello from main.js')

//there are two different Variables which are let and const.
//let age = 25
// console.log(age)

//const salary = 8000
//console.log(salary)

// the diferent btw let and const. variable is that another item can not be  added to const. variables
//for example
/*  const salary = 0
salary = 8000
console.log(salary)  */

// let sum
// sum = 5
// console.log(sum)

//=============================Topic: Data Types================

// Data Types ; which specifies the kind of data that can be store or manipulated in javascript within the programm
// Data type can be categorise into two which are :
//       Primitive and Nonprimitive

//   Primitives are listed below:              |  Nonprimitive are listed below:
//  String type                                |    //  Objects
//  Number type                                |
//  Boolean type                               |
//  Undefined type                             |
//  Null type                                  |
//  Biglint type                               |
//  Symbol type

//============= examples for each are as follows

//  =====> Strings are surrounded with quotes
// const name = 'vishwas'
//  const language = "Javascript"
// const channel = 'codevolution'

// =======> Number type
//  const total = 0
//  const PI = 3.14

//=======> Boolean type; it repesent logical entities it can only have one or two values
//  const isPrimaryNumber = true    // they are use to run codes conditionally base on value been true or false
//  const isNewUser = false

// ======> Undefined type: it represent values that is not assigned,
//if a variable is decleared but the value is not assigned then the value of the variable will be undefined
// i.e that is not yet define.
/* let result
console.log(result) */

//  const res = null

//=====> Null type; its a special value which represent empty or an unknown value in javascript

// const data = null

//=================Nonprimitive is a collection of values====================

//                       there is only one type: which is object type.
// Object type is a complex of data type, its contain properties defined as key values peers
//====> Examples as follows
//       example of Object
/* const person = {
    firstName: "Bruce",
    lastName: "Wayne",
    age: 30,
} 
 console.log(person.firstName)*/

// Above syntax is known as object literal is one way to store collections of data

// ===> Another way below is the Array type, which they are written in square bracket.
//  Example on Array
//===================> example one
// ===>Array
/* const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[0]) */

// ======================> example two
// ARRAY

/* let fruits = ["Orange", "Mango", "Chashew"];

// fruits[3] = "Apple"

fruits.push("Apple");   // Add an element
fruits.pop();       // Remove last element
fruits.unshift("Pear");   //Add element to the begining
fruits.shift();      // Removes element from the begining
let length = fruits.length;     // To get the total of element
let index = fruits.indexOf("kwi")
console.log(fruits); */

// console.log(index);

// ===========2D ARRAY : it is An array of arrays===========

/* let fruits = ["Mango", "Cashew", "Apple"];
let vegetable = ["Gabbage", "Ugu", "Waterleaves"];
let meats = ["Pork", "Beaf", "Chicken"];

let groceryList = [fruits, vegetable, meats];

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
} */
// =======================Object map=================
// Object map its an object that holds  key-value pairs of any data type,
//  it remember the origina insertion order of the keys. it is declared as equal to *new Map()*
// for example
/*  const store = new Map([
  ["Pant", 300],
  ["Underwear", 50],
  ["T-shirt", 20],
  ["Polo-shirt", 20],
]);
// let shoppingCart = 0
// shoppingCart += store.get('T-shirt') //its to Gets the value for a key in a Map
// console.log(shoppingCart) 
store.set('hat', 40) // To add or Sets the value for a key in a Map
store.delete('hat')  // 	Removes a Map element specified by a key
console.log(store.has('polo')) // *store.has* its in console because it will return boolean value,  to check existense of key
console.log(store.size)   //Returns the number of Map elements
store.forEach((value, key) => console.log(`${key} $${value}`)); // Arrow call function expression to display all Map element
  */
// its the reference to a particular object the object depends on the immediate context
/* 
 const Car = {
  model: 'Mustang',
  color: 'red',
  year: 2023,
  drive: function () {
    console.log(`you drive the ${this.model}`)
  }
}
Car.drive() */

// ========= =====================*Class* ================
// its a blueprint for creating objects define what properties and
// methods they have use a constructor for unique properties
// for example
/* 
 class player {
  score = 0;
  pause() {
    console.log(`You paused the game`);
  }
  exit() {
    console.log(`You exited the game`);
  }
}

const player1 = new player();
const player2 = new player();

player1.score += 1
console.log(player1.score);
console.log(player2.score);

player1.pause();
player1.exit()

player2.pause();
player2.exit();   */

//============================Constructor==================
// it has a special method of a class, accepts arguments and assigns properties
/* 
class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}
const student1 = new Student("Olajide", 31, 3.2);
const student2 = new Student("Adebayo", 27, 1.2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();
 */
//======================================= Class static=====================
//   it belongs to the class, not the objects
// properties: useful for cashes, flexed - configuration
//   methods: Useful for utility function

/* class Car{
  static numberOfCars = 0  // example of static usefulness for properties

  constructor(model) {
    this.model = model;
    Car.numberOfCars +=1
  }
   static startRace() {
    console.log("3.....2....1....Go!"); // example of static usefulness for method
  }
} 
// const car1= new Car('Benz')
// const car2= new Car('BMW')
// const car3 = new Car('Toyota')
// console.log(Car.numberOfCars) // it increase the number in the console as the number of variable declared
Car.startRace()  */

//===============================Class inheritance=================
// A child class can inherit all the methods and properties from another class
// for example
/* 
class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is eating`)
  }
  alive = true;
  sleep() {
    console.log(`${this.name} is sleeping`)
  }
}
// the below code inherit the above code with the use of extends.
 class Rabbit extends Animal{
  name ="rabbit"
  run() {
    console.log(`${this.name} is running`)
  }
}
class Fish extends Animal {
  name = "fish";
  swimming() {
    console.log(`${this.name} is running`);
  }
}
class Hawk extends Animal {
  name = "hawk";
  swimming() {
    console.log(`${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish()
const hawk = new Hawk();

console.log(fish.alive)
fish.eat();
fish.sleep();
fish.swimming(); // Replace the fish with other animal to the result in the console.

 */
// =====================*Super keyword* inheritance=====================
/* class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// the below code inherit the above code with the use of extends.

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}
const rabbit = new Rabbit("Rabbit", 5, 200);
const fish = new Fish('Fish', 3, 10);
const hawk = new Hawk("Hawk", 7, 350);

console.log(rabbit.name);
console.log(rabbit.age);      // Replace the fish with other animal to the result in the console.
console.log(rabbit.runSpeed);
 */
// ===========Get and set properties for binding=============
// get = binds an object properties to a function when that properties is accessed
// set = binds an object properties to a function when that properties is assigned a value

/* class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power; // Adding underscore means its a protected protected properties,
    //                 Dev.shouldn`t mess with it
  }
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100}%)`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

car.gas = 10;

console.log(car.power);
console.log(car.gas); */

// =============How to pass an object to function as an argument=============

/* class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
};
const car1 = new Car("Benz", 2023, "red");
const car2 = new Car("Toyota", 2025, "blue");
const car3 = new Car("lambo.", 2035, "black");
changeColor(car2, "gold");
displayInfo(car2);

function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

function changeColor(car, color) {
  car.color = color;
} */
// ==========================How to create an Array of Object in javaScript=====================
/* class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive the ${this.model}`)
  }
}
const car1 = new Car("Benz", 2023, "red");
const car2 = new Car("Toyota", 2025, "blue");
const car3 = new Car("lambo.", 2035, "black");

const cars = [car1, car2, car3]

console.log(cars[0].model)   // Repeat thesame to the items in the constructor with the index number
cars[0].drive() // change the index to access the list of items in the array
// Example with function to access the list of items in the array above at once.

startRace(cars)
function startRace(cars) {
  for (const car of cars) {
    car.drive()
  }
}
 */

//============================Anonymous object====================
// its an objects without a name Not directly referenced less syntax. No need for unique names

/* class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamond"),
  new Card("A", "Clubs"),
  new Card("2", "Hearts"),
  new Card("2", "Spades"),
  new Card("2", "Diamond"),
  new Card("2", "Clubs"),
];
cards.forEach(card => console.log(`${card.value} ${card.suit}`))
 */
// =================Error and Throw ===========================
// Error = object with adescription of something went wrong
// throw = executes a user-defined error

/* try {
  let x = window.prompt("Enter a #");
  x = Number(x);
  if (isNaN(x)) throw "That wasn`t a number!";
  if (x == "") throw "That was empty!";

  console.log(`${x} is a nunber`);
} catch (error) {
  console.log(error);
} */
// ====================setTimeout()==================
// it invokes a function after a number of milliseconds asynchronous function ( doesn't pause execution)
/* let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
  alert(`Buy this ${item} for $${price}`);
}
function secondMessage() {
  alert(`This is not a scam`);
}
function thirdMessage() {
  alert(`Do ITTT!`);
}
document.getElementById("myButton").onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Thanks for buying`);
};
 */
// =================setInterval()==================
// setTimeout() = it invokes a function repeatedly after a number milliseconds
// asynchronous function (doesn't pause execution)
/* let count = 0;
let max = window.prompt("count up to what #?"); // input the number you want the count to stop
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1
  console.log(count)
  if (count >= max) {
    clearInterval(myTimer)
  }
} */
// =============================Date object======================
// The Date object is used work with dates & time let date = new Date()

// let date = new Date(0);
// let date =new Date(2023,0,1,2,3,4,5)
// let date = new Date("January 1,2023 00:00:00");

// let year = date.getFullYear()
// let dayOfMonth = date.getDate()
// let dayOfWeek = date.getDay()
// let month = date.getMonth()

// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = formatDate(date);

// =================To create a function to format a date===========================
/* let date = new Date(0);

// document.getElementById("myLabel").innerHTML = formatDate(date);
// To invoke the time coment out the formatDate DOM above but keep the declared above variable date open

document.getElementById("myLabel").innerHTML = formatTime(date); 
 
function formatDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day =date.getDate()

  return `${month}/${day}/${year}`
}
function formatTime(date) {
  let hours =date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
let amOrPm = hours >= 12 ? "pm" : "am" // ternary oprator

  hours = (hours % 12) || 12    // this to convert minitary time to standard time,
                                  //  with the ternary opretor above

  return `${hours}:${minutes}:${seconds} ${amOrPm}`
} */

// ========= The clock that update every seconds=================
// first go to the HTML to create a label tag
/*
 const myLabel = document.getElementById("myLabel2");

update();
setInterval(update, 1000); // This callback the function below to kick start the time
function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date); // this to invoke the blow function
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // To set to minitary time to standard time
    let amOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

// to invoke the function the function below
    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }
  // to change the single Zero to two digit
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
 */
// =============================console.time()=========================
//  its start a timer you can use to track how long an operation takes, Give each timer a unique name
// start
/* 
console.time('Response time')

// alert('CLICK THE OK BUTTON')
setTimeout(()=> console.log('HELLO'),3000)
// end
console.timeEnd('Response time')
 */

//================================OPERATOR============================

//An operators is a special sysmbol used to perform operations on values and variables
// Assignment operators
// Arithmetic operators
// Comparison operators
// Logical operators
// String operators
// Other operators

//===> Assignment opeators examples below

/* let x = 10
let y = 5
console.log(x+y)
console.log(x % y) // this give the value after dividing the declared variable
console.log(++x)  //it gives the increment of value by 1
console.log(--y)  // it gives the decrement of value by 1 */

//===> Comparism operators
// It compares two values and returs boolean values either True or False examples are as follows
/* let x = 10;
let y = 5;
console.log(y>=x) // Equal to or greater than
console.log(y<=x) // Equal to or less than
console.log(x==y) //  To check if it`s equal to y
console.log(x!=y) //  To check if it`s not equal to y */

//Logical Operators
/* it performs logical operations and returns either true or false, they're very helpful 
when combining comparism operators results to make decisions*/
//for examples

/*  let x = 10;
 let y = 5;
const isValidNumbers = x > 8 && 8 > y   //  && is called logical-AND operators

console.log(isValidNumbers)
   
const isValidNumber = x > 20 || 8 > y    //   || is called logical-OR operators
console.log(isValidNumber) */

/* const isValid = false
console.log(isValid) */

//===> String operators
//for examples
// console.log('Bruce ' + 'Wayne')

//======> Ternary operator
// it is shortcut for an "if/else statement"
//it is represented by question mark
// =========== it takes 3 operand which as follow
//  1. Condition with ?
//  2. Expression if True
//  2. Expression if False
// in short below
// condition ? exprIfTrue : exprIFalse
// for example

// first example
/* const isEven = 10 % 2 === 5 ? 'Number is even ': 'Number is odd'
console.log(isEven) */

// second example
/* let adult = checkAge(12);
function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  else {
    return false
  }
}
console.log(adult); */

// third example
/* let adult = checkAge(18)
console.log(adult)
function checkAge(age){
  return age >=18 ? true : false
} */

/* function checkWinner(win) {
  win ? console.log('YOU WIN!') : console.log('YOU LOSE')
}
checkWinner(true) */

//=======> Spread Operator
//  It allows an iterable such as an array or string
//  to be expanded in places where Zero or more arguments are
//  expected (unpacks the elements)
//  example below

/* let numbers = [1, 2, 3, 4, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum); */

// ====================================== Type Conversions=========================

// There are two type of conversion which are as follows
//Implicit conversion : also know as type coercion where javascript itself will automatically convert the type
//Explict conversion where you manually convert the type

// Examples are as follows
// Implicit conversion

// console.log(2  + '2')
// console.log('Bruce' - 'Wayne')
// console.log('5' - null)
// console.log('5' - undefined)

// Explicit conversion
// ====> first to convert a string or boolean to numeric types you can use number global method
/* console.log(Number(false))          // To convert boolean to number
console.log(parseFloat('3.14'))      // To covert string to number
 */
// ====> String global method
/* console.log( String('500'))    // Both still give thesame result with the same input
console.log(String(false))   
 */
//===> To string global mthd
// console.log((500).toString())

//=====>To convert other data type to boolean use
//===> The global boolean mthd
/* console.log(Boolean(1))             // The both convert to boolean
console.log(Boolean(undefined)) */

//==================================Equality==============================

// There are two types which are as follows
//==(Allows coercion)
//===(Does not allow coercion)
//----> For examples
/* const var1 = true
const var2 = false

console.log(var1 == var2)
console.log(var1 === var2)
 */
//==============================Conditional statement=========================

//they are use to perform different actions base on different conditions

//for examples, you may want to execute different block of codes base on.......
// weither a number is positive, negative or zero

//In javaScript we use different conditional statement which are as follows
//    IF
//    Else
//    Else if
//    Switch (which is an alternative)
//          exampls are as follows

/*  let number = 5
 if (number > 0) {
     console.log('Number is positive')
 }else if (number < 0){
     console.log('Number is negative')
} */

/* const num = -5
if (num > 0) {
console.log('Number is positive')
} else     {
    console.log('Number is not positive')
} */

/* const num = 0
if (num > 0 ) {
console.log('Number is positive')
} else if (num < 0 ) {
    console.log('Number is negative')
} else{
    console.log('Number is zero')
} */

// if you have large number of choices switch statement is the best code example is below

/* const color = 10
switch(color) {
    case 'red':
         console.log('color is red')
         break
    case 'blue':
         console.log('color is blue')
         break
    case 'green':
         console.log('color is green')
         break
     default:
         console.log('Not a valid color')
} */

//=====================================Looping code=================================

// In programing loops are use to repeat a block of code,
//for examples
// if you want to print number 1 to 50 you can make use of loops
// You can achieve block with loops

// Below are some looping constructs

// For loop
// While loop
// Do..while loop
// For..of loop

//Examples on each are as follows
//============>Example for for loop
/* for(let i =1; i <= 5; i++) {
    console.log('Iteration number' + i)
} */

// example two in reference with array
/* let prices = [5, 10, 20, 25];
for (i = 0; i < prices.length; i += 1){
  console.log(prices[i])
} */

// =============> examples for While loop

/* let i = 1
while (i <= 5){
    console.log('Iteration number' + i)
    i++
}
 */
// ================> Examples for Do..while loop
// The main different is that is always executed once
// let i = 6
// do {
//     console.log('Iteration number' + i)
//         i++

// } while (i <= 5)

// ==============> Example for For..of loop
// It`s used to loop over a collection of data, like an array.
/* const numArray = [1,2,3,4,5]

for(const num of numArray) {
    console.log('Iteration number' + num )
} */
//           example two
/* let prices = [5, 10, 20, 25]

for (let price of prices) {
  console.log(price)
} */
//==================================Functions===============================

// A javaScript is a block of code designed to perform a particular task
//Examples Add two numbers, Multiply two numbers etc

// function greet(username) {
//   console.log("Good morning " + username);
// }
// greet("Clark"); // To call or invoke a function
// greet("Diana");
// greet("Job");
// when invoking the code above the 'Clark' is called function parameter and
// 'username' is called function parameters

// function add(a,b) {
//     return a+b
// }
// const num = add(5,10)
// console.log(num)

//================================== Return fuction===================
// Return : it is a return value
//          when it return a value back to the place where you invoked a function
// for example
/* 
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area is:", area);

function getArea(width, height) {
return width * height;

} */

// Arrow functions (INTRODUCE IN 2015)

// IF IT DOESNT WORK LOOK MORE INTO ARROW FUNCTIONS
// ====Comparism of regular function to Arrow function=====
// =========Regular Function
/*const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};
const area = calcArea(4)
console.log(`area is:`+ area) */

//============> Arrow function
// const calcArea = (radius) => {
//   return 3.14 * radius ** 2
// }
// const area = calcArea(4)
// console.log(`area is:`+ area)

// ======== arrow fuction
// const arrowSum = (a, b) =>  a + b
// const sum = arrowSum(5,10)
// console.log(sum)
//===================================== Callbacks & forEach===========
// example of Callbacks function
/* 
const myFunc = (callBackFunc) => {
  let value = 50;
  callBackFunc(value);
};
myFunc((value) => {
  console.log(value);
});*/

// example of forEach (with Regular function)
/* 
let people = ["Famous", "Olajide", "Adebayo", "Adenike"];

people.forEach(function(person,index){
  console.log(index,person);
}); */

// example of forEach (with Arrow function)

/* const people = ["Olajide", "Famous", "Cushygirl", "Rukayat", "Kunle", "Sunday"];
people.forEach((lovelyPeople, index) => {
  console.log(index, lovelyPeople);
}); */

// example of combination of Arrow function,Callback with forEach
/* 
let people = ["Marlo", "Olajide", "Adebayo", "Adenike"];
const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`);
};
people.forEach(logPerson); // this is the callback */

// More example of Arrow function
// let grades = [100, 50, 90, 60, 80, 70];
// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

// ==================Nested function============
/* let userName = "Bro";
let userInbox = 0

// login()

function login(){
  displayUserName()
  displayUserInbox()
  function displayUserName() {
    console.log(`Welcome ${userName}`);
}
  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}
login();
 */
//============================TOPIC: SCOPE =========================

// It determines the accesibility or visibility of variables
//===> There are three types of scope which are as follows
// Block scope(introduce in 2015)
// Function scope
// Global scope

// ==========> Block scope indicte that variables declared inside of calibrator ...
//...can not be acces outside the block
// For examples of Block scope

/* // inside
if (true) {
  const myName = "vishwas";
  console.log(myName);
}

// outside
const num = 100;
if (true) {
  console.log(num);
} */

//   //outside
//   if (true) {
//     const myName = 'vishuas'
//   }
//   console.log(myName)

// =========> Function scope : It indicate that varriables declared inside the function can not be acces outside the funtion

// Examples
//    Inside
// function testFn() {
//     const myName = 'Batman '
//     console.log(myName)
//     console.log(num)
// }
// testFn()

// Outside
// function testFn() {
//     const myName = 'Batman'

// }
// console.log(myName)
// testFn()

//===> Variable scope : where a variable is accesssible
// let = variable are limited to block scope {}
// var = variables  are limited to a function(){}

// for (var i = 1; i <= 3; i++){
//   console.log(i)
// }
//   console.log(i)
// From the above code, Any variable decleared with the let key word is limited to  block code,
// it does not exist outside the caliberator,
// but if replace with var it will work and is not good for practice ev

// Any variable declared outside the function with the var keyword does not exist. for example below

// doSomething();

// function doSomething() {
//   for (var i = 1; i <= 3; i++) {
//     //   console.log(i)
//   }
// }
// console.log(i);

// =======>  Global variable: is declared outside any function
// (if global, var will CHANGE browser`s window property)
// var name = "Bro";

// ==========Function Decoration and Function Expression======

// ====>Function Expression
//  it is a function without a name  (anonymous function) avoid polluting the
//  global scope with names, Write it then forget about it.

// example of Function Expression

// let count = 0

// document.getElementById("increasement").onclick = function () {
//   count += 1;
//      document.getElementById("myLabel").innerHTML = count;
// };
// document.getElementById("decreasement").onclick = function () {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// Function Decoration

// it is a function that an attribute(onclick="increaseCount()") is added through the HTML body

//example of Function Decoration

// let count = 0
// function increaseCount() {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// ======================================module =====================
// ==============================Important of module=======================
// The idea behind a nmodule is  that its's a file of reusable code
// We can import section of pre-written code to use whenever we need it
// Greaat  for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book
//========================Steps to follow to create the module=========================
/* // 1 =====> To create a module, within the opening script tag inside HTML input module...
//  ..as an attribute "type = module", then you create a new javaScript file with the name "math_util.js"
// 2. =====> create the reuseable code and precede them all with an export keyword
// for example
/* export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * radius * radius
} 
// 3. ====> Then end back to the javascript file and link the file with the actual javascript file type the following link
//  import{list of function and items declared in from the utility file seperated with comma} from "./math_util.js";
//  import{PI, getCircumference, getArea } from "./math_util.js";
//                                        OR
//  import * as MathUtil from "./math_util.js"; then... 

// 4. =====>.... Then log each element or declared each element, example below
console.log(PI)

let circumference = getCircumference(input the value for radius)
  console.log(circumference)
  
let area= getArea(input the value for radius)
  console.log(area)

//                                        OR
  // 4. =====>.... Then log each element or declared each element with precedence of MathUtil, example below
console.log(MathUtil.PI)

let circumference = MathUtil.getCircumference(input the value for radius)
  console.log(circumference)
  
let area= MathUtil.getArea(input the value for radius)
  console.log(area)
 */

//=================================== DOM ========================
// its the Document Object Model (API)
// An interface for changing the content of a page
// console.log(document)
// console.log(document.title)
// console.log(document.URL);
/* 
let fruits = document.getElementsByName('fruits')

fruits.forEach(fruit => {
  if (fruit.checked) {
    console.log(fruit.value)
  }
})
 */
/* 
// const element = document.getElementById("myButton");
// const element = document.body
// const element = document.getElementById("myText");
const element = document.getElementById("myDiv")
// element.onclick = doSomething
// element.onload= doSomething
// element.onchange = doSomething;
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething() {
  element.style.backgroundColor ="red"
}

function doSomethingElse() {
  element.style.backgroundColor = "green";
} */

// ===========.addEventListener method of DOM=========

// .addEventListener(event,function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions
/* 
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue);

function changeBlue() {
  alert(`You selected ${this.id}`)
  this.style.backgroundColor = "lightblue"
} */

// ===========================Canvas API =================
/* // Draw lines

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


context.strokeStyle ="purple"
context.lineWidth =10
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250)
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);

context.stroke() */


// DRAW TRIANGLE

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.strokeStyle =' pink'
context.fillStyle = 'yellow'
context.lineWidth = 10
context.beginPath()
context.moveTo(250,0)
context.lineTo(0,250)
context.lineTo(500, 250);
context.lineTo(250, 0);

context.stroke()
context.fill()



















