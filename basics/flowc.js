//falsy values
//false,0,-0,BigInt On,"", undefined,NaN

//truthy values
//"0",'false',[],{},function(){}

//nullish coalescing operator (??): null  undefined
let v1;
// v1=3 ?? 6
// console.log(v1);
// v1=null??6
// console.log(v1);
v1=null??10??100
console.log(v1);

//terinary operators
// condition?true:false
const user='abc'
user=='abc'?console.log(`hi ${user}`): console.log("enter user name")

//for of loop
const array=[2,4,6,8]
// for(const index of array){
//     console.log(`element is ${index}`);
    
// }

// function gettigsuffix(i){
//     if(i==1) return "st";
//     if(i==2) return "nd";
//     if(i==3) return "rd";
//     return "th";
// }
// for(const [key,value] of array.entries()){
//     const ind=key+1;
//     console.log(`${ind}${gettigsuffix(ind)} element is ${value}`);
    
// }

// const arr=[1,2,3,4,5,6,7,8]
// function suffix(i){
//     if(i==1) return "st";
//     if(i==2) return "nd";
//     if(i==3) return "rd";
//     return "th";
// }
// for(const [k,v] of arr.entries()){
//     const index=k+1;
//     console.log(`${index}${suffix(index)} element is ${v}`);
    
// }
//in arrays we should use array.entries() to access key value pairs

//map is ds that stores key value pairs , maps in JavaScript are known for unique keys rather than unique values.
//  Each key in a map must be unique, but the values associated with those keys can be same.
// const mymap=new Map()
// mymap.set('mess1',"hi")
// mymap.set('mess2',"hello")
// mymap.set('mess3',"heyy")
// console.log(mymap);

//maps are iteratble using for of but objects aren't iterable through this
// for(const [ke,va] of mymap){
//     console.log(va);
    
// }

//FOR IN loop is used to iterate objects mainly
// const myobj={
//     js:'javascript',
//     r:'react',
//     csd:'computer science and design'
// }
// for(const k in myobj){
//     console.log(k);
//     console.log(myobj[k]);
// }
//in for of loop values would be printed
//but in for in loop keys are printed 
//however we can access values / keys later 

//objects- for in loop
//arrays- for of loop/for each/map 

//for each loop (contains 3 parameters - item,index,array), for each doesn't return any value(it gives undefined)
// const names=["abc","def","ghi","jkl","mno"]
// names.forEach(function (keyy){
//     console.log(keyy);
    
// })
