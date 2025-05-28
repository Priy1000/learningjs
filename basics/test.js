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