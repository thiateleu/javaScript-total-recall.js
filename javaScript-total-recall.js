///////////////////variables and datatypes/////////////
////////A. Q + A
// 1. How do we assign a value to a variable?
// use the assignment (=) operator to assign a value to a variable or property.
//2. how do we change the value of a variable?
// the first and easiest way of changing a value of a variable is simply to reassign it:
//example, let numberOfCats = 3; numberOfCats = 4;
//3. what are declare, assign, define:
// declare use var(only in older programs), let, const
// assign using the assignment opperator
// define a variable is to give the variable a value.
//5. what is pseudocoding and why should you do it?
// pseudocoding is using plain language to discribe what the code is doing. We should use it to help process the logic you indend to execute.
// 6. what percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// you should spend over half the time planning (over 60%), the time should be spent in solving the actual coding should take less time.

// /////////////let firstVariable = "Hello World";
// firstVariable = 32;
// let secondVariable = firstVariable;
// secondVariable = "Nice!"
// console.log(firstVariable);
// let yourName = "Khadija";
// let greeting = `Hello, my name is ${yourName}`;
// console.log(greeting);


// ////////////////  BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
// console.log(a != b);
// console.log(c != d);
// console.log('Name' == 'Name');
// //FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a < b != c);
// console.log(a == a != d);
// console.log(48 == '48');

// ///////////////// D--The Farm
///Declare a variable animal.
// let animal = "cow";
// /////if the it is equal to cow
// if (animal === "dog") {
//     console.log("moooo");

// }  else {
//     console.log("Hey! You're not a cow");

// }

/////////E. Driver's Ed

// let personAge = 9;
// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
//     }


/////////////////////////// 1  Loops//////////////////////////////

///////// A- WRite a loop that out all the numbers from 0 to 10, inclusive

// for(let i = 0; i <11; i++) {
// console.log(i)
// }
// Write a loop that will print out all the numbers from 10 up to and including 400
// for (i = 10; i <401; i++) {
//     console.log(i)
// }

//Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i+=3) {
//     console.log(i)}
//Get even
//Print out the numbers that are within the range of 1- 100
// for (let i=1; i <=100; i++) {
//     if (i%2 ===0) {
//         console.log(i)
//     }
// }

////////// B- Adjust your code to add a message next to even numbers only that says."<--is an even number"
// for (i = 1; i<=100; i++) {
//     if (i%2 === 0) {
//             console.log( i +'<-- is an even number');
//     } else {
//             console.log(i); }
//     }

/////////////// C-Give me Five
// For the number 0 -100, print out "I found a number. High five!" if the number is a multiple of five
// For the number 0 -100, print out "I found a number. High five!" if the number is a multiple of five
for (let i= 0; i <=100; i++) {
    if (i%5 === 0) {
            console.log(i + 'I found a number. High five!');
    } else {
            console.log(i);
    }
}

for (let i= 0; i <=100; i++) {
    if (i%3 === 0) {
            console.log(i + 'I found a number. Three is a crowd');
    } else {
            console.log(i);
    }
}

