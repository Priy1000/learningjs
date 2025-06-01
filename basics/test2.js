/*
video 13
*/
//date is an object in js
let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString())
console.log(date.toUTCString());
console.log(date.getTimezoneOffset());
console.log(date.getHours());
console.log(date.getMonth());

let mydate=new Date('12-21-2004')
console.log(mydate.getTime())
let timestamp=Date.now()
console.log(timestamp);

//if u want time in seconds instead of milliseconds then seconds=milliseconds /1000
//hours=seconds/3600
//minutes=(seconds%3600)/60 
//remainingsecs=seconds%60

 
let datenow=new Date()
console.log('INDIA:',datenow.toLocaleString('en-US',{
    timeZone:"Asia/Kolkata",
    hour:"2-digit",
    minute:"2-digit",
    second:"numeric",
    weekday:"long",
    month:"long",
    day:"numeric",
    timeZoneName:"short"
}))



/*
VIDEO 14
ARRAYSSSSSSSSSSSS
*/
const myarray=new Array(2,4,6,8,10,12)
// console.log(myarray[3])
const myarray1=[1,3,5,7,9]
// console.log(myarray1)
// myarray.push(1)
// console.log(myarray)
// myarray1.unshift(2)
// console.log(myarray1);

// myarray1.shift()
// console.log(myarray1);
// const newarray=myarray.join()
// console.log(newarray)
// console.log(typeof newarray);


const neww=myarray.slice(2,4)
console.log("A",myarray);
console.log(neww);
//used for copying


const news=myarray.splice(2,4)
console.log("B",myarray);
console.log(news);
//used to modify/insert 

//slice dont manipulate origiinal array but splice does manipulate original array


//push modifies/adds to the same array
//concat creates a new array

//if we have many arrays to add then use spread method to merge arrays
const fruits=['mango','strawberry','watermelon','apple','cherry']
const vegetables=['potato','tomato','onion','cabbage','carrot']
 
// fruits.push(vegetables)
// console.log(fruits);

// const newarrays=fruits.concat(vegetables)
// console.log(newarrays);

const merged=[...fruits,...vegetables]
console.log(merged);

console.log(Array.isArray([1,2]))
console.log(Array.from("priya"));
console.log(Array.from({note:"hello"}));

const naya=[1,2,4,[5,6],7,4,9,[8,5,[6,4]]]
console.log(naya.flat(Infinity));






