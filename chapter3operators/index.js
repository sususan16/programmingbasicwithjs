// OPERATORS

// 1. arithmetic(+,-)

// 2. assignment

// 3. comparison

// 4. logical

// --------------------------------------------------

// 1. arithmetic(+)

// let z = "a"+"b"; 
// console.log(z); // ab

// let z = "b"+3; // string + number = string
// console.log(z); // b3

// -----------------------------------------------

// 1. arithmetic(-)

// let z = "a"-"b"; // string-string = number/NaN
// console.log(z); // NaN

// let z = "asdf"-2; // string-number = number/NaN
// console.log(z);

// ----------------------------------------------------

// 1. arithmetic(*)

// let z = "4"*"2";
// console.log(z); // 8

// let z = "4asdf"*"2";
// console.log(z); // NaN

// ---------------------------------------------------

// 1. arithmetic(/)

// let x = 4/2;
// console.log(x); // 2

// 1. arithmetic(%)

// let x = "4"%2; // remainder
// console.log(x); // 0

// --------------------------------------------------------

// 2. assignment

// let a,b,c = 0;
// console.log(a); // undefined
// console.log(b); // undefined
// console.log(c); // 0


// power
// console.log(2**4) // 2*2*2*2=>16


// let bread = 3;
// bread += 2; // 5
// bread -= 4; // 1

// console.log(bread);

// let a = 4;
// a *= 2; // 8
// a /= 2; // 2
// a %= 2; // 0
// console.log(a);

// --------------------------------------------------------

// operator precedence

// Note: Calculate first in ()
//     : * and / calculate first than + and -

// let a = 4+5-3/5*4
// console.log(a); // 6.6

// ---------------------------------------------------

// comparison operator (> , < , >= , <= , == , === , != ,!==)

// let a = 5;
// let b = "5";

// console.log(a>b); // false
// console.log(a<b); // false
// console.log(a>=b); // true
// console.log(a<=b); // true
// console.log(a==b); // true
// console.log(a===b); // false (Triple equal === check on data type)
// console.log(a!=b); // false (because a and b are equal)
// console.log(a!==b); // true (because a and b are not equal in data type)

// --------------------------------------------------------


// logical operator

// 1. Not (!)
// 2. And (&&)
// 3. Or (||)

// 1. Not (!)

// console.log(!false);
// console.log(!5==5); // false

// ---------------------------------------

// 2. And (&&)

// let num = 1;

// console.log(num>0 && num==1); // true only if two statements are true
// console.log(num>0 && num==4); // false

// ----------------------------------------

// 3. Or (||)

let num = 1;

// console.log(num>0 || num==1); // true + true = true
// console.log(num>0 || num==2); // true + false = true if at least one statement is true
// console.log(num>4 || num==2); // false + false = false

// ------------------------------------------------------