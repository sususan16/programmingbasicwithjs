// condition (if else)

// let tired = prompt('Are you tired? "yes/no" :');

// if(tired === 'yes')
//     console.log('rest well!');
// else if(tired === 'no')
//     console.log('Go back to work!')
// else
//    console.log('Please enter yes or no!');

// ----------------------------------------------------------------

// if else examples

// let product_prices = [100,500,100,300,700,200,100];

// product_prices = product_prices.map((price)=>{
//     // console.log(price);
//     if(price === 100)
//         price -= 30;
//     return price; // (7) [70, 500, 70, 300, 700, 200, 70]
// });

// console.log(product_prices);

// -------------------------------------------------------------
// Method 1

// let people = [
//     {name: 'john', age: 25},
//     {name: 'jane', age: 20, gender: 'f'},
//     {name: 'jack', age: 40, gender: 'm'}
// ]

// // console.log(people);
// people = people.map(person=>{
//     // console.log(person);
//     if(person.gender){
//         if(person.gender === 'm')
//             person.gender = 'male';
//         if(person.gender === 'f')
//             person.gender = 'female';
//     }
//     else
//       person.gender = 'unknown';

//     return person; // never forget to return

// });

// console.log(people);

// ---------------------------------------------------------------------------
// Method 2

// let people = [
//     {name: 'john', age: 25},
//     {name: 'jane', age: 20, gender: 'f'},
//     {name: 'jack', age: 40, gender: 'm'}
// ]

// // console.log(people);
// people = people.map(person=>{
//     // console.log(person);
//     if(person.gender === 'm')
//         person.gender = 'male';
//     else if(person.gender === 'f')
//         person.gender = 'female';
//     else
//         person.gender = 'unknown';

//     return person; // never forget to return

// });

// console.log(people);

// ----------------------------------------------

// if else expression ( ternary operator )

// expression can be stored in variables
// let x = 1 + 2;
// console.log(x);

// let age = 10;
// let permission;

// if else statement
// if(age > 18){
//     permission = "authorized";
// }else{
//     permission = "unauthorized";
// }

// console.log(permission);
// ----------------------------------------
// if else expression

// let age = 20;
// let permission = age > 18 ? "authorized" : "unauthorized" ;
// console.log(permission);

// --------------------------------------------------------

// switch statement
// Note: switch needs to be break if we want
// Note: switch checks expression
// Note: if else checks whether it's true or false

// switch(5){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three"); 
//         break;
//     default:
//         console.log("This is default.");
// }

// ----------------------------------------------

// let people = [
//     {name: 'luke', age: 20, gender: 'm'},
//     {name: 'mg mg', age: 23},
//     {name: 'su su', age: 18, gender: 'f'}
// ]

// people = people.map((person)=>{
//     //  console.log(person);
//     switch(person.gender){
//         case "m":
//             person.gender = "male";
//             break;
//         case "f":
//             person.gender = "female";
//             break;
//         default:
//             person.gender = "unknown";
//     }

//     return person;
// });

// console.log(people);

// Example by myself

// people = people.map((person)=>{

//     switch(person.name){
//          case "luke":
//             person.name = "Luke San";
//             break;
//          case "mg mg":
//             person.name = "Margo";
//             break;
//          default:
//             person.name = "Alex";
//     }

//     switch(person.age){
//          case 18:
//             person.age = "18 yrs old";
//             break;
//          case 20:
//             person.age = "20 yrs old";
//             break;
//          default:
//             person.age = "23 yrs old" ;    
//     }
    

//     switch(person.gender){
//          case "m":
//             person.gender = "male";
//             break;
//          case "f":
//             person.gender = "female";
//             break;
//          default:
//             person.gender = "unknown";
//     }

//     return person;
// });

// console.log(people);

// ----------------------------------------------

// looping

// while loop
// Note: It runs repeated works.
// Note: It runs till condition is true.
// Note: It checks condition first and works later.

// let x = 0;
// while(x<10){
//       console.log('hi' +x);
//       x++;
// }

// --------------------------------------------

// let people = ['mgmg','aungaung','kyawkyaw','susu','john'];
// Note: With no looping, we have to print out each index.
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
// console.log(people[3]);

// let x = 0;
// while(x < people.length){
//       console.log(people[x]);
//       x++
// }

// ----------------------------------------------

// Example by myself

// let myGirls = ['Selena Gomez','Taylor Swift','Olivia Rodrigo','Bellie Eilish'];

// let x = 0;
// while(x < myGirls.length){
//         console.log(myGirls[x]);
//         x++;       
// }

// ----------------------------------------------------

// do while loop
// Note:It works first and check condition later

// let x = 0;
// do{
//     console.log('work' + x);
//     x++;
// }while(x < 5);

// --------------------------------------------

// Example by myself
// let myMen = ['Justion Bieber','Ed Sheeran','Harry Styles','Ali Gatie'];

// let x = 0;
// do{
//    console.log(myMen[x]);
//    x++;
// }while(x < myMen.length);

// ------------------------------------------

// for loop
// Note: It's the most fundamental loop.

// for(let x = 0; x < 5; x++){
//     console.log('hello'+ x);
// }
// -----------------------------------------

// let people = ['aungaung','kyawkyaw','susu','mgmg','luke'];

// for(let x = 0; x < people.length; x++){
//        console.log(people[x]);
// }

// ----------------------------------------------

// for of loop (suitable for array)
// Note: Before of, naming system should be singular, eg. person.
// Note: After of, variable name of array is used

// let people = ['aungaung','mgmg','kyawkyaw'];

// for(person of people){
//      console.log(person);
// }

// -----------------------------------------------------

// Example by myself

// let loveLetters = ['I love you soo much','Bae, you\'re made for me','Let me be your man for sure'];

// for(love of loveLetters){
//     console.log(love);
// }
    
// ---------------------------------------------------------------------

// for in loop (suitable for object)
// Note: To print out object, we can use dot notation(.) and bracket notation([]).
// Note: Bracket notation([]) is used to accept dynamic values.
// Note: Bracket notation([]) is the best for all situations.

// let person = {
//     name: 'Luke',
//     age: 20,
//     city: 'Yangon',
//     citizenship: 'Burmese'
// }

// for(key in person){
//     // console.log(key);
//     // console.log(person[key]);
//     console.log(`${key} is ${person[key]}.`);
// }

// ---------------------------------------------------

// Homework for array
// for in loop can be used for array
// Because array is derived from object
// index can be used as key

// let people = ['aungaung','mgmg','naungnaung'];

// for(key in people){
//     // console.log(key);
//     // console.log(people[key]);
//     // console.log(`${key} is ${people[key]}`);
// }

// -----------------------------------------------------------

// Scoping
// Global scope
// Local scope
// Note: Global variable can be used from anywhere
// Note: Local variable can only be used in local scope otherwise we will get error

let x = 0;
console.log(x); // global variable

{
    let y = 10;
    // console.log(y); // local variable
    console.log(x); // 0
}

// console.log(y); // error


