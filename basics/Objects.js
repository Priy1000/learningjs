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

//nested objects
const newobj={
    message:"hi",
    age:"40",
    username:{
        firstname:{
            nickname:"sammy",
            name:"sam kapoor"
        }
    }
}
console.log(newobj.username);



const obj1={abc:'1',def:'2',ghi:3}
const obj2={klm:'8',nop:'9'}
 

// const obj4=Object.assign({},obj1,obj2)
// const obj5={obj1,obj2}
// console.log(obj5);
//these methods arent used

// console.log(obj4);


//spread method which is same in case of merging arrays also
const obj3={...obj1, ...obj2}
console.log(obj3);

//when values come from databases they come in the form of arrays
const user=[
    {
        name:"abc",
        email:"def@gmail.com"
    },
    {
        name:"abc",
        email:"def@gmail.com"
    },
    {
        name:"abc",
        email:"def@gmail.com"
    },
    {
        name:"abc",
        email:"def@gmail.com"
    } 
    
]
console.log(user[1].name)

console.log(Object.keys(intro));
console.log(Object.values(intro))
console.log(Object.entries(intro));
// all these op' will be in array 
console.log(Object.hasOwnProperty("name"));



/*
VIDEO 18
*/

//destructuring happens both in arrays and objects
const users={
    text:"hello",
    company:"hennge",
    location:"japan"
}
const {text:t,company:c,location:l}=users
console.log(t);
console.log(l);

//json - java script object notation