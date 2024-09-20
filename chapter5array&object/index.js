// Object & Array

// Array is a standard object of Javascript
// Note: Any types of different datas can be stored in array together.

// old method with array object constructor
// let mixture = new Array('dog',20,1.3,true);

// --------------------------

// new method with array literal
// let mixture = ['dog',20,1.3,true];
// console.log(mixture);
// console.log(mixture.length);

// --------------------------------

// let mixture = ['dog',20,1.3,true];

// Calling index value
// let bobo = mixture[0];
// let num = mixture[1];
// console.log(bobo);
// console.log(num);
// -------------------------
// Adding index value
// mixture[4] = "Luke";
// console.log(mixture);
// console.log(mixture[4]); // Luke
// -----------------------------------------
// overriding index value
// mixture[3] = false;
// console.log(mixture);
// console.log(mixture[3]) // false

// ----------------------------------------------------------

// let fruits = ['apple','orange'];
// fruits[2] = "mango";
// console.log(fruits[2]); // mango
// console.log(fruits[fruits.length-1]); // mango


// Nested Array

// let arr = [
//     ['a','b','c'],
//     [1,2,3]
// ];

// arr[2] = ['i','ii','iii'];

// console.log(arr);
// console.log(arr[0][2]); // c
// console.log(arr[1][2]); // 3
// console.log(arr[2][2]); // iii 

// ---------------------------------------------------

// spread operator(...)

// let data1 = [1,2,3];

// let data2 = [4,5,6];

// let result = [... data1,... data2];
// console.log(result); // (6) [1, 2, 3, 4, 5, 6]

// function add(a,b){
//     console.log(a+b); // 3
// }

// let nums = [1,2];
// add(... nums); // 1,2

// ------------------------------------------

// spread operator

// let datas = ["Mg Mg",20,"TTU"];
// console.log(... datas);

// ----------------------------------------

// destructuring

// let datas = ["Mg Mg",20,"TTU"];
// let [name,age,school] = datas;
// console.log(name,age,school);

// function cal([a,b,c]){
//     console.log((a+b)*c);
// }
// let arr = [10,20,30];
// cal(arr);

// function choice([a,b,c]){
//     console.log(a + b + c);
// }
// let arrCh = ['i ','like ','apple. '];
// choice(arrCh);

// ---------------------------------------------------

// Array Methods

let animals = ['cat','dog','lion'];
// animals[3] = "bird";

//push() appends new elements to the end of an array
// animals.push("tiger");

//pop() removes the last element from an array and returns it
// animals.pop();

//shift() removes the first element from an array and returns it
// animals.shift();

//unshift() inserts new element at the start of an array
// animals.unshift('tiger');


//indexOf() returns the index of the first occurrence of a value in an array
// let dog = animals.indexOf('dog');
// console.log(dog);

//join() returns all the elements of an array into a string
// let sperator = animals.join();
// let sperator = animals.join("-"); // cat-dog-lion
// console.log(sperator);

//splice(index,deleteCount) removes elements from index to count
// animals.splice(0,2);

// console.log(animals);

// -----------------------------------------------------

// Array Methods
// map() returns each element at a time
// map() accepts one callback function

// let nums = [1,2,3,4,5];

// New array created(newArr)
// let newArr = nums.map((num)=>{
//     return num+100;
// });

// console.log(newArr); // [101,102,103,104,105]

// --------------------------------------------------

// override array(nums)
// nums = nums.map((num)=>{
    // return num+100;
// });

// console.log(nums); // [101,102,103,104,105]

// ----------------------------------------------------------

// let names = ['John','Chris','MgMg','Alex'];

// names = names.map(name=>{
//    return "Mr."+name;
// });

// console.log(names);
// console.log("Once upon a time,there're four friends namely "+names[0]+", "+names[1]+", "+names[2]+" and "+names[names.length-1]+".");

// -----------------------------------------------------
// Array Filter Method
// filter() accepts one callback function

// let nums = [1,2,3,,4,5,6];

// override method
// nums = nums.filter((num)=>{
//    return num%2 === 0;
// });

// console.log(nums); // (3) [2, 4, 6]

// --------------------------------------------------
// new variable name declared
// let result = nums.filter((num)=>{
//     return num%3 === 0;
// });

// console.log(result); // (2) [3, 6]

// -----------------------------------------------------
// override method
// nums = nums.filter((num)=>{
//    return num !== 3;
// });

// console.log(nums); // (5) [1, 2, 4, 5, 6]

// -----------------------------------------------------------

// Array Reduce Method
// reduce() accepts one callback function with two parameters
// reduce() returns the last result

// let nums = [1,2,3,4,5,6];
// adding with override method
// nums = nums.reduce((prev,current)=>{
    // console.log(prev,current);
    // return prev + current;
// });

// console.log(nums); // 21

// ------------------------------------------------------
// multiplication with override method
// nums = nums.reduce((prev,current)=>{
    // return prev*current;
// });

// console.log(nums); // 720

// ------------------------------------------------------------

// Array Methods
// let nums = [1,2,3,4,5,6];
 
// map()
// let newArr = nums.map((num)=>{
//     return num + 100;
// });
// console.log(newArr); // (6) [101, 102, 103, 104, 105, 106]

// filter()

// let filteredNums = nums.filter((num)=>{
//     return num%2 === 0;
// });
// console.log(filteredNums); // (3) [2, 4, 6]

// reduce()

// let result = nums.reduce((prev,current)=>{
//     return prev + current;
// });
// console.log(result); // 21

// ------------------------------------------------
// Basic Refactoring Concepts
// Refactoring means making code lines shorter and cleaner while it maintains its function working
// We should refactor every single code possible
// map()
// let reNewArr = nums.map(num=>num + 50); 
// console.log(reNewArr); // (6) [51, 52, 53, 54, 55, 56]

// filter()
// let reFilteredNums = nums.filter(num=> num%3 === 0);
// console.log(reFilteredNums); // (2) [3, 6]

// reduce
// let reResult = nums.reduce((prev,current)=> prev * current);
// console.log(reResult); // 720

// ----------------------------------------------------

// Everything is a object

// let str = new String('hello');// Object // Because of writing lowlevel code, type shows object
// let str = 'Hello'; // string
// console.log(str);
// console.log(typeof str);
// console.log(str.length); // 5

// str = str.toUpperCase(); // HELLO
// str = str.toLowerCase(); // hello
// console.log(str);

// trim() removes all spaces before and after of words
// let str = ' Hello ';
// str = str.trim();
// console.log(str.length);

// split() separates string like array
// let str = "Hello World Again"; // (3) ['Hello', 'World', 'Again']
// str = str.split(" ");

// let str = "Hello,World Again"; // (2) ['Hello', 'World Again']
// str = str.split(",");
// console.log(str);

// ---------------------------------------------------------
// toFixed() take nearly value 
// let num = new Number(12.6);
// let num = 12.6;

// num = num.toFixed(); // 13
// console.log(num);

// toString() makes boolean string
// let bool = new Boolean(true);// object
// let bool = true; // boolean
// console.log(typeof bool);
// bool = bool.toString(); // string
// console.log(typeof bool);

// ----------------------------------------------

// Object
// key value pair

// let person = {
//     name: 'John',
//     age: 20,
//     city: 'Yangon'
// }

// override name
// person.name = "John Doe"

// adding new properties
// person.citizen = "UK";
// person.hairColor = "Black";
// console.log(person);

// dot(.) notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// bracket notation []
// console.log(person['name']);
// console.log(person['age']);
// console.log(person['city']);

// bracket notation [] is available for other sources
// let propName = 'name';
// console.log(person[propName]);

// -----------------------------------------------
//Note: We should not write arrow function to create method but function expression
// let person = {
//     name: "John",
//     age: 20,
//     // To create method,we can remove semicolon and function keyword to write shorthand
//     eat(){
//         console.log("Person is eating.");
//     } 
// }

// function expression
// person.drink = function(){
//     console.log("Person is drinking.");
// }

// person.eat();

// person.drink();

// -----------------------------------------------------------

// this
// Note: this keyword points out its current object
// method => method's object
// regular function => window
// arrow function => parent's this (lexical scoping)



let man = {
    name: 'John',
//    eat(){

//         // console.log(this);
//         console.log(this.name + ' is eating');
//         console.log(this.name + ' is eating');
//         console.log(this.name + ' is eating');
//    }

    // Note: That's why we should not use arrow function to create method
    // eat:()=>{ 
    //    console.log(this); // window object
    //    console.log(this.name + ' is eating'); // is eating
    // } 
   


    // eat(){
    //     // regular function
    //     setTimeout(function(){
    //         console.log(this); // window object
    //     }, 3000);
    // }

   


}

// man.eat();

// parent
// console.log(this); // window object
// let person = {
//     name: "John",
//     eat(){
//         // console.log(this);

//         // Note: Arrow function doesn't have own object so it uses its parent's object
//         setTimeout(() => {
//             console.log(this);
//         }, 3000);
//     }


    // Arrow function
    // eat:()=>{
    //     // child 

    //     // Note: Arrow function doesn't have own object so it uses its parent's object
    //     // parent
    //     console.log(this); // window object
    //     setTimeout(()=>{
    //         // child
    //         console.log(this); // window object
    //     }, 3000);
       
    // }
// }
// person.eat();

// regular function
// function test(){
//     console.log(this); // window
// }

// test(); // window object

// ----------------------------------------------------
// Shortcut key: Ctrl + F to find string in logs
// Window object is the start of all.
// console.log(window);
// -----------------------------------------------------

//setTimeout() accepts one callback function and works with millisecond
//Example: 3000 means it will work after 3s
// setTimeout(() => {
//    console.log('i am callback');
// }, 3000);

// ---------------------------------------------------

// object spread and object destructuring and property shorthand

// object spread

// let obj1 = {
//     myName: 'Luke',
//     myAge: 20
// }

// let obj2 = {
//     myHairColor: 'black'
// }

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// -------------------------------------------------

// object destructuring

// first method
// let {name,age} = {
//      name: 'Luke',
//      age: 20
// }

// console.log(name);
// console.log(age);

// -----------------------------

// second method
// let person = {
//     yourName: 'John',
//     yourAge: 20
// }

// let {yourName,yourAge} = person;
// console.log(yourName,yourAge);
// ---------------------------------------------------

// array destructuring (just recall from previous lesson)

// first method
// let [name,age] = ['luke',20];
// console.log(name);
// console.log(age);

// second method
// let info = ['John','Doe'];
// let [firstName,lastName] = info;
// console.log(firstName,lastName);

// ---------------------------------------------------------------

// property shorthand

// let name = "Luke";
// let age = 20;

// Normal property
// let person = {
//     name: name,
//     age: age
// }
// console.log(person);

// property shorhand
// Note: If names of property and value are the same, we can use like this below
// let person = {
//     name,
//     age
// }
// console.log(person);

// --------------------------------------------------------

let people = [
    {name: 'luke', age: 20, gender: 'male'},
    {name: 'aung aung', age: 25, gender: 'male'},
    {name: 'su su', age: 18, gender: 'female'}
]
// console.log(people);

// map() accepts a callback function and return a new array
// let peopleName = people.map(person=> person.name);
// console.log(peopleName);

// let peopleAge = people.map(person=> person.age);
// console.log(peopleAge);

// let peopleGender = people.map(person=> person.gender);
// console.log(peopleGender);

// filter() accepts a callback function and return a new array
// let filteredGender = people.filter(person=> person.gender === 'male');

// console.log(filteredGender);
// console.log(filteredGender[0]['name']); // luke
// console.log(filteredGender[1]['name']); // aung aung


// let searchKeyword = prompt('search anything :')

// let filterNameGender = people.filter((person)=>{
//     return person.name.includes(searchKeyword)|| person.gender === (searchKeyword);
    
// });
// console.log(filterNameGender);

// -------------------------------------------------------------

// JSON '' is a string
// Note: key and value should be under double quotes("")
// Note: Remove spaces to be JSON
// Note: JSON is used to share one language to another

// 6 Data Types allowed to use in JSON
// String,Number,Boolean,Array,Object,null

let person ='{"name": "Luke","age": 20}';
// console.log(person);
// console.log(typeof person); // string

// JSON.parse() converts string to object
let obj = JSON.parse(person);
// console.log(obj);
// console.log(obj.name);
// console.log(obj['age']);
// console.log(typeof obj); // object

// JSON.stringify() converts object to string
// let string = JSON.stringify(obj);
// console.log(string);
// console.log(typeof string); // string


