const nums=[2,4,6,8,1,3,5,7,9]
// const newnums=nums.map((n)=>n+2)
// console.log(newnums);

const newnums=nums
.map((n)=>n*3)
.map((n)=>n+1)
.filter((n)=>n<20) 
console.log(newnums);
