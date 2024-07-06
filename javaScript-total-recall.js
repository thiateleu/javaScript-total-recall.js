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
// for (let i= 0; i <=100; i++) {
//     if (i%5 === 0) {
//             console.log(i + 'I found a number. High five!');
//     } else {
//             console.log(i);
//     }
// }

// for (let i= 0; i <=100; i++) {
//     if (i%3 === 0) {
//             console.log(i + 'I found a number. Three is a crowd');
//     } else {
//             console.log(i);
//     }
// }


/////////// D. Savings account
///Write code that will save the sum of all the numbers between 1 - 10 to a variable called  bank_account.
// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
// }
//     console.log(bank_account);

//// Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//     bank_account += i*2;
// }
//     console.log(bank_account);

///////////////// 3-III. Arrays & Control flow //////////////////////
/////  A. Talk about it:
/// 1- What are the things in an array called? 
//Element
/// 2- Do Arrays guarantee those things will be in order?
//Yes 
/// 3-  What real-life thing could you model with an array?
//shopping list

///// B. Easy Does It
////Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["Khadija","Mary", "Danielle"];
// console.log(quotes);

/////  C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// //// 1- How do you access the 1st element in the array?
// console.log(randomThings[0]);
// //// 2 Change the value of "Hello" to "World"
// randomThings[2] = "world";
// //// 3 Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);

//// D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// /// 1- What would you write to access the 3rd element of the array?
// console.log(ourClass[3]);
// /// 2- Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass);
// //// 3- Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");
// console.log(ourClass);

//// E. Mix It Up
// const myArray = [5, 10, 500, 20];
// /// 1- Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "star");
// console.log(myArray);
// /// 2- Remove the 5from the beginning of the array.
// myArray.shift();
// console.log(myArray);
// /// 3-  Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);
// /// 4- Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
// /// 5- Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse();
// console.log(myArray);

///// F. Biggie Smalls
/// 1- console.log()s "little number" if the number is entered is less than 100
// let num = 20;
// if (num <50) {
//     console.log("little number");
// } // console.log()s  big number if the number is greater than or equal to 100.
//  else {
//     console.log("big number");
// }

////// G. Monkey in the Middle
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log  big number.
// Otherwise, log "monkey".
// let number = 7;
// if (number < 5) {
//     console.log("little number");
// } else if (number> 10) {
//     console.log("big number");
// } else {
//     console.log("monkey");
// }

////// H. What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//     ],[
//       // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//     ],[
//       // Thom's accessories
// "wool mittens",
// "wool scarf",
//     "raybans"
//     ]
// ];
// /// 1- What's Kristyn wearing today?
// console.log("Kristyn is rocking that" + kristynsCloset[4] + " today!");
// /// 2- Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "raybans");
// /// 3- Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained knit hat";
// /// 4- Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// const thomsOutfit = [thomsCloset[0][0], thomsCloset[1][1],thomsCloset[2][1]];
// /// 5- In the same way, access one item from Thom's pants array.
// const thomsPants =  thomsCloset[1][1];
// /// 6- Access one item from Thom's accessories array.
// const thomsAccessories =  thomsCloset[2][2];
// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is looking fierce in a grey button-up, jeans and wool scarf!");
// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);