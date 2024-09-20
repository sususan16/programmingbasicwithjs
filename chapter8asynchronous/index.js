// Asynchronous Javascript

// sync way(it works one after one)
// console.log(1);
// console.log(2);

// async way(it works one after one but if there has something to wait, it doens't wait , it skip and run that time taken one later)

// console.log(1);
// console.log(2)
// setTimeout(()=>{
//      console.log(3)
// },3000);
// console.log(4);

// ----------------------------------------------------

// promise

// function synchronous(){

//     let result = 0;
//     for(let i = 0; i < 1000000000; i++){
//         result += i;
//     }

//     return result;
// }
// console.log('work');
// console.log(synchronous());
// console.log('more important work');

// ----------------------------------------------
// We use Promise to tell other codes not to wait for it. And it says like "Guys, do ur work first, don't wait for me, I'll be there when i finished my work!"
// function asynchronous(){
//     return new Promise((resolve,reject)=>{
//          let result = 0;
//          for(let i = 0; i < 1000000000; i++){
//              result += i;
//          }

//          if(result){
//              resolve(result);
//          }else{
//             reject('I have got some errors');
//          }
//     });
// }

// console.log('work');
// asynchronous()
// .then((result)=>{
//     console.log(result);
//     console.log('After async task, do this , do that!')
// }).catch((error)=>{
//     console.log(error);
// });
// console.log('more important work');

// ---------------------------------------------------------

// Example by myself

// function asynchronousExample(){
//     return new Promise((resolve,reject)=>{
//        let data = 0;
//        for(let i = 0; i < 5000000000; i++){
//            data += i;
//        }
     
//        if(data){
//          resolve(data);
//        }else{
//          reject("Error");
//        }

      
//     });
// }

// console.log('work');
// asynchronousExample()
// .then((data)=>{
//    console.log(data);
//    console.log("Love yourself and then love others!")
// }).catch((error)=>{
//       console.log(error);
// })
// console.log('more important work');

// -----------------------------------------------

// Fetch api


// Method 1 (its disadvantage is we have to use catch() twice)

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//          console.log(err);
//     });
// }).catch((err)=>{
//     console.log(err);
// });

// --------------------------------------

// Method 2 (it's mostly used in real world,don't need to write catch twice)

// let userInput = prompt('Tell me user id!');
// fetch('https://jsonplaceholder.typicode.com/todos/' + userInput)
// .then((response)=>{

//     return response.json()
    
// }).then((data)=>{

//     console.log(data);

// }).catch((err)=>{

//     console.log(err);

// });

// -----------------------------------------------
// We need to use async to use await
// It doesn't mean we have to use await when we use async

// async function fetchTodos(){
//    try{
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     // console.log(response);
//     console.log('hi');

//     let datas = await response.json();
//     console.log(datas);
//    }catch(err){
//        console.log(err);
//    }
// }

// fetchTodos();

// -------------------------------------------------------

// Coding Styles
// 4 Types of Variable Names
// all cap
// HELLO_WORLD
// const PI = 3.14

// ------------------------------------

// snake case
// hello_world
// let color_name = "black";

// ---------------------------------------

// camel case
// helloWorld
// let obj = {
//     propertyName : 'name';
//     methodName(){

//     }
// }

// ------------------------------------

// capital case
// HelloWorld
// class MyCar{

// }

// ----------------------------------------

// Array

// let array = [
//     'luke',
//     'alex',
//     'margo', // trailing comma
// ]

// ---------------------------------------------

// if else
// If there's one line, we need no block {} and should write beside if,else
// If there's many lines, we need to use block {}

// let x = 5;
// if(x < 0) console.log(true);

// else console.log(false);
// -----------------------------------------

// if(x === 5){
//       console.log(true);
//       console.log('x is equal to ' + x);
// }else{
//       console.log(false);
//       console.log('x is not equal to ' + x);
// }
// --------------------------------------------------

// function
// There should be a space between () and {}
function test() { 
    console.log('hi')
};

test();


