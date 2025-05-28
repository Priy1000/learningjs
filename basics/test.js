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