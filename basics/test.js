console.log("ciao");
console.log(+true)
console.log(+" ");
//number+string=string 

//string+number=string

//if we'll write + behind a value then it converts value to a number(impooooortantt)

console.log(1+2+(+"3")) // here the + before 3 and within the bracket acts as unary operator and tries to convert string to number

let a=2;
let b=3;
console.log(`a:${a}, b:${b}`);
console.log(`sum:${a+b}`)
// to embed variables,calculations we can use string interpolation 

/*VIDEO 7
prefix : the value will increment and store 
x=4
y=x++
op: x=5 and y=5

postfix : the value is stored first and then incremented
x=4
y=++x
op : x=5 and y=4
*/

/*
VIDEO 8
=== it strictly checks comparisons like it even checks the data types of the values
*/
console.log("2"===2)


/* 
data types are divided based on how they're stored and accessed
PRIMITIVE AND NON PRIMITIVE

PRIMITIVE : these are call by value , original value will not be changed only its copy is changed
NON PRIMITIVE(REFERENCE) : these are call by reference , oroginal value changes 


(primitive)7types : String, boolean, int, bigint, symbol, null, undefined
(non primitive)3 types : arrays, objects, functions

js is dynamically typed language cuz we dont declare any data types unlike c and c++
this means variable types are declared at run time and , no neeed to explicitly decalre the type of
a variable before using it. can assign diff types of value to a variable in its lifetime.
*/

const first=Symbol('hi')
const second=Symbol('hi')
console.log(first===second)
const bignum=3528732743983239273n



/*
MEMORY
STACK(PRIMITIVE), HEAP(NON PRIMITIVE)
*/

/*
VIDEO 11
*/

const naam='priya'
console.log(naam.__proto__)
//this gives all the methods for that string
 
/*
video 12

*/
const num = new Number(200)
console.log(num.toString().length)
console.log(num.toFixed(3))
//decimal value it'll give
const number=437.78
console.log(number.toPrecision(3))
const abacus=7439895
console.log(abacus.toLocaleString("en-IN"))
//en -IN converts american standard code of writing numbers like it applies commas n give for readability

console.log(Math.abs(-5))
console.log(Math.ceil(5.7))
console.log(Math.floor(5.7))
console.log(Math.round(5.7))
/*
| Number | `ceil()` | `floor()` |
| ------ | -------- | --------- |
| 4.3    | 5        | 4         |
| -4.3   | -4       | -5        |


*/
console.log(Math.random)
//gives value from 0 to 1

console.log(Math.random()*10 +1)
//*10 cuz we want to get greater value and 1 is for like if the random value is like 0.004 so inorder to
//avoid 0 we add 1
console.log(Math.floor(Math.random()*10) +1)

const minimum=20
const maximum=30
console.log(Math.floor(Math.random()*(maximum-minimum+1))+minimum)
//wt this does is it gives random numbers but we'll set minimum value for th random numbers so +min
