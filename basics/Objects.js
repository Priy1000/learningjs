//can declare objects in 2 ways 1.CONSTRUCTOR, 2.LITERALS
//if the objects are declared in the form of literals then singleton is not formed but
//if they are declared in the form of constructors then singleton is formed
//wt is singleton
//A singleton is an object that is created only once, and reused everywhere.

const mysymbol=Symbol("2")
const intro={
     name:'Priya',
     age:20,
     location:'Japan',
     [mysymbol]:2

}
console.log(intro.age);
//one way of getting output
console.log(intro["location"]);
//2nd way of getting output which is also a safer way

console.log(typeof mysymbol);


// intro.age=21
// Object.freeze(intro)
// intro.age=22
// console.log(intro);



intro.greeting=function(){
    console.log("heyy");
    
}
console.log(intro.greeting());

intro.greeting2=function(){
    console.log(`hey, ${intro.name}`);
    
}
console.log(intro.greeting2());




/*
VIDEO 17
*/

//using constructor/singleton
const bumble=new Object()
console.log(bumble);

bumble.name="Priya"
bumble.location="Japan"
console.log(bumble);
