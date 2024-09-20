// Functions

// shopping
// console.log("go to shop");
// console.log("buy a product");
// console.log("go back home");


// function shopping(product){ // let product = "pen";
//     console.log("go to shop");
//     console.log("buy a " + product); // pen // pencil pro
//     console.log("go back home");
// }

// shopping("pen");
// // shopping();
// // shopping();
// shopping("pencil pro");

// Boolean();


function add(num1,num2){
    // console.log(num1 + num2);
    return num1 + num2;
}

// first way
// console.log(add(1,2));

// second way
// let result = add(1,2);
// console.log(result); // 3
// console.log(result+1); // 4


// function sayName(name,age){
//     // console.log(name,age);
//     // some work
//     return name;
// }

// let test = sayName("Luke",20);
// console.log(test);

// function sayName(name){
//     // some work
//     // Note: Always return undefined when there's no return in function

// }

// let test = sayName("Luke");
// console.log(test); // undefined

// ----------------------------------------------------

// Homework
// function calculateAge(bornYear){

//     let currentYear = new Date().getFullYear();
//     let yourAge = currentYear-bornYear;
    
//     if(bornYear >= currentYear || bornYear <= 0){
//         return "Please try with valid year, sir 🤏!!!";
//     }else if (bornYear <= 2006 && bornYear >=2000){

//         return "So you're "+yourAge+" years old right? How's your youth? Like Troye Sivan's song,my youth,my youth,my youth is yours...? Just kidding 😁!!!";

//     }else if (bornYear <= 1999 && bornYear >= 1960){

//         return "So you're "+yourAge+" years old right? How's it going Mr./ Ms.? Btw, can I have your daughter for the rest of my life? Say yes, say yes 😁!!!";

//     }else{
    
//         return "So you're "+yourAge+" years old right?";

//     }
// }

// let age = calculateAge(2004);
// console.log(age);

// -----------------------------------------------------


// Default Parameter

// function add(a,b=2){
//    console.log(a+b); // 3+2 = 5
// }

// add(3);

// -----------------------------------

// Rest Parameter(... should be between () of a function)

// function test(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test(1,2,3,4,5,6,7,8);

// -------------------------------------

// function statement
// Note: function statement can call function before building function/ before initialization
// Note: function statement runs first before any other codes in javascript

// function with return
// let yourName = myName("Luke");
// console.log(yourName);

// function myName(name){
//    return name;
// }

// let yourName = myName("Luke");
// console.log(yourName);

// --------------------------------------

// function with console
// myName();

// function myName(){
//     console.log("Luke San");
// }

// myName();

// -------------------------------------------

// function expression
// Note: function expression cannot access before building function / before initialization

// sayHi("Hi there"); // error

// let sayHi = function(hi){
//     console.log(hi);
// }

// sayHi("Hello");

// --------------------------------------
// Note: function expression looks like variables, which cannot be accessed before initialization

// console.log(hi); // error
// let hi = "hello";
// console.log(hi);

// -----------------------------------------------------------------------------------------------------------------

// Callback Function Part-1

// function sayMyName(name,fun){
//     // console.log("Luke");
//     // console.log(name,fun); // if we call fun without (),it will result function syntax not result we wan
//     fun("Luke");
// }

// sayMyName("Luke",function(name){console.log(name)});

// ------------------------------

// function sayMyName(name,fun){
//     let result = fun(name);
//     console.log(result);
// }

// sayMyName("Luke San",function(name){ return name});

// -----------------------------------------------------------------

// Callback Function Part-2

// Step by step twice
// function twice(num,modifier){
//     let mod = modifier(num);
//     console.log(mod); // 11

//     let result = mod * 2;
//     console.log(result); // 22
// }

// twice(5,function(num){
//     return num + 6;
// });

// --------------------------------------------

// Short code half
// function half(num,modifier){
//     let result = modifier(num) / 2;
//     console.log(result); // 45
// }

// half(100,function(num){
//      return num - 10; // 90
// });

// -----------------------------------------------

// Arrow Function
// Note: Arrow Function is one of the type of Function Expression
// Note: Function Expression can be converted into Arrow Function

// Function Expression
// let sayHi = function(){
//     console.log("Hi");
// }
// sayHi();
// ------------------------------

// Arrow Function
// let sayHello =(hello)=>{
//     console.log("Hello");
//     console.log(hello);
// }

// sayHello("How are you?");

// -------------------------------------
// Note.1: If code is one line, we can write without {}
// Note.2: If code is one line and has return, we must remove return keyword
// Node.3: If there is one parameter, we can write without ()

// Node.1
// let sayHey =()=> console.log("Hey there!");
// sayHey();

// ---------------------------------------

// Node.2
// let sayThere =()=> "Hey there,we meet again!";
// console.log(sayThere());

// Before one line and not removing return
// let sayThere =(greet)=>{
//    return greet;
// }
// console.log(sayThere("Hey there"));

// After one line and removing return
// let sayThere =(greet)=> greet;
// console.log(sayThere("Hey there,we meet again!"));
   
// ---------------------------------------------

// Note.3
// let sayDaddy =word=> word;
// console.log(sayDaddy("Daddy!!!"));

// Arrow Function with two parameters
// let sayDaddy =(word,action)=> action+","+word;
// console.log(sayDaddy("Daddy!!!","Let's play together"));

// ---------------------------------------------------

let twice = num=>num*2;
console.log(twice(5));

