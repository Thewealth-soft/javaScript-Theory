// console.log('Hello from olajide')

//==================================SCOPE(continuation)==================

//from  the last section we`ve talk about BLOCK, FUNCTION AND GLOBAL SCOPE
//
//Nested function`s scope

 /* let a = 10
 function outer () {
     let b = 20
     function inner() {
         let c =30
         console.log(a, b, c)
     }
     inner()
 }
outer() */

//==========================CLOSURE=======================
// function outer() {
//   let counter = 1;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

// slide variation of code
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();
// fn();
// fn();

//                              Function curring

// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(2, 3, 5))

// //ie it transform sum(2, 3, 5) to sum(2)(3)(5)


// function curry(fn) {
//     return function(a){
//         return function(b) {
//             return function(c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))


// const add2 = curriedSum(2)
// const add3 =add2(3)
// const add5 = add3(5)
// console.log(add5)


//                                       Using "this " keyword







// const person = {
//     name: 'Vishwals',
//     sayMyName: function () {
//         console.log('My name is ${this.name}')



//     },
// }
//  function sayMyName () {
//     console.log('My name is ${this.name}')



// }

// sayMyName.call(person)


// alert('hello');

// document.body.innerHTML = "hello";

















