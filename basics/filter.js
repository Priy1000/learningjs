//filters(returns values)
const numbers=['1','3','5','7','9']
// const newnum=numbers.filter((n)=>n>6)
const newnum=numbers.filter((n)=>{
    return n<6;
})
console.log(newnum);
