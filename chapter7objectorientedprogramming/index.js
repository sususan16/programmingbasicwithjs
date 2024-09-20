// OOP
// class is a blue print.
// Based on blue print, we can create so many objects as we like
// Based on blue print, let suppose we create two objects but these two objects are never the same. 

// class Car{
//     wheels = 4;
//     color = "black";

//     drive(){
//         console.log('I\'m driving');
//     }
// }

// let car = new Car;
// console.log(car.color);

// let carTwo = new Car;
// carTwo.color = "red";
// console.log(carTwo.color);

// ------------------------------------------------------

// OOP Example

// Note: Using static property, we can directly print out variables, functions/ methods from class name.

// class Calculator{

//     static PI = 3.14;

//     static plus(n1,n2){
//         return n1 + n2;
//     }

//     minus(n1,n2){
//         return n1 - n2;
//     }

//     multiply(n1,n2){
//         return n1 * n2;
//     }

//     division(n1,n2){
//         return n1 / n2;
//     }

//     remainder(n1,n2){
//         return n1 % n2;
//     }
// }

// console.log(Calculator.PI);
// console.log(Calculator.plus(1,2));
// let calculator = new Calculator;
// console.log(calculator.plus(1,2)); // 3
// console.log(calculator.minus(100,10)); // 90
// console.log(calculator.multiply(1,2)); // 2
// console.log(calculator.division(10,5)); // 2
// console.log(calculator.remainder(3,2)); // 1

// ----------------------------------------------------------
// static property and static method

// class Calculator{
//     static PI = 3.14;
//     static area(r){
//         return 3.14*r**2;
//     }
// }

// console.log(Calculator.area(2)); // 12.56

// ---------------------------------------------------
// this refers to its class, Calculator
// class Calculator{
//     PI = 3.14;
//     area(r){
//         return this.PI*r**2;
//     }

//     volume(r,h){
//         return this.area(r)*h;
//     }
// }

// let calculator = new Calculator;
// console.log(calculator.area(2)); // 12.56
// console.log(calculator.volume(2,4)); // 50.24


// ------------------------------------------------------------

// Note: In static method, this keyword doesn't work
// Note: this refers to object of its method. eg. calculator
// Note: Static methods run based on class,Calculator.
// That's why when we use this keyword in static methods, there's no object to point out.
// So we need to create object in static method to use Name in this.

// class Calculator{
//     PI = 3.14;
//     Name = 'casio';
//     area(r){
//        return this.PI*r**2;
//     }

//     volume(r,h){
//        return this.area(r)*h;
//     }

//     static info(){
//         let calculator = new Calculator;
//         console.log('i am ' + calculator.Name + ' calculator');
//     }
// }

// Calculator.info();
// let calculator = new Calculator;
// console.log(calculator.volume(2,4));

// ---------------------------------------------------

// Example by myself

// class carTypes{
//     carName1 = "Toyota";
//     carName2 = "Mercedes";
//     carName3 = "Ford";

//     myCar1(){
//         return "I have "+ this.carName1 + ".";
//     }

//     static myCar2(){
//         let car = new carTypes;
//         return `I have ${car.carName2}.`;
//     }

//     myCar3(num){
//         return `I have ${num} ${this.carName3}.`;
//     }
    

    
// }

// console.log(carTypes.myCar2());
// let car = new carTypes;
// console.log(car.myCar1());
// console.log(car.myCar3(3));

// ---------------------------------------------------

// OOP (Constructor & access modifier)

// class Car{
//     Name = '';
//     wheels = 4;
//     constructor(name,wheels){
//         this.Name = name;
//         this.wheels = wheels;
//         this.drive();
//         // this.getWheels();
//     }
    
//     drive(){
//         console.log(this.Name + ' is driving.');
//     }

//     getWheels(){
//         console.log(this.Name + ' has ' + this.wheels + ' wheels');
//     }
// }

// new Car('mercedes',4);
// // new Car('toyota',10);
// let toyota = new Car('toyota',10);
// toyota.getWheels();


// ----------------------------------------------------------
// Example by myself

// class Apple{

//     device = '';
//     price = '';

//     constructor(device,price){
//         // console.log("Is there anyone who doesn't like apple");
//         this.device = device;
//         this.price = price;
//         this.iPhone();

        
//     }

//     iPhone(){
//         console.log(this.device + ' is ' + '$' + this.price + '.');
//     }

//     iPad(){
//         console.log(`${this.device} is $${this.price}.`);
//     }
// }

// let iphone = new Apple('iPhone16promax',1500);
// let ipad = new Apple('iPadmini',1300);
// let iphone = new Apple('iPhone16promax',1500);
// let ipad = new Apple('iPadmin',1300);

// ----------------------------------------------------

// OOP (access modifier) (static public private protected)
// Note: There's no protected in javascript
// Note: #name , # means private.

class Car{
    Name = "mercedes"; // public
    #hp = 300; // private

    getHorsePower(){
        console.log('Horse Power is ' + this.#hp);
    }
}

let car = new Car;

// public
// car.Name = "toyota";
// console.log(car.Name);

// private
// car.#hp = 600;
// car.getHorsePower();

// console.log(car.#hp); // error


// --------------------------------------------

// Example by myself

// class Phone{
//     #phoneBrand = "Redmi";

//     price = 300;

//     info(){
//         console.log(`Brand is ${this.#phoneBrand} and price is $${this.price}`);
//     }

    
// }

// let phone = new Phone;
// phone.price = 400;
// // phone.#phoneBrand = "Xiaomi"; // error because it's private
// phone.info();


// ----------------------------------------------------

// OOP (inheritance)
// Note: protected can be used in its child but javascript has no protected
// Note: private can only be used on its own , can't be used in its child

// class Animal{
//     #age = 1;
//     constructor(name){
//         this.Name = name;
//     }

//     run(){
//         console.log(`${this.Name} is running`);
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log(this.Name+' can say woof woof');
//     }
// }

// let dog = new Dog('Bo Phyu');
// dog.run();
// dog.bark();
// // console.log(dog.#age); // error because it's private field

// let animal = new Animal('cat');
// // animal.#age = 5; // error
// // console.log(animal.#age); // error
// dog.run();
// console.log(dog);

// -----------------------------------------------------------------------

// public => access anywhere
// private => access only in own class
// protected => access only in own class and child class
