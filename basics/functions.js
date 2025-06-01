// function add2numbers(n1,n2){
//      let sum=n1+n2
//      return sum
// }

// 

// function adding(no1,no2){
//     console.log(no1+no2)
// }
//to return smthg use return keyword instead of using log

// const result=adding(5,5)
// console.log("res:",result)


function logindetails(username="Priya"){
    if(!username){
        console.log("enter user name")
        return
    }
    return `${username} just logged inn`
}
console.log(logindetails("Aman"))


//rest and spread operators are almost same but differ in the way of usage
// function totalpricecart(v1,v2,...n1){
//     return n1
// }
// console.log(totalpricecart(2000,300,4,5))

const user={
    username:"sammy",
    age:20
}
function userdata(anyuser){
    console.log(`username: ${anyuser.username} and age is :${anyuser.age}`)

}
userdata(user)

const newarr=[1,2,3,4,5,6]
function secndvalue(anyarr){
   return anyarr[2]
}
console.log(secndvalue(newarr))

if(true){
    const user="abc"
    if(user==="abc"){
        const website=" instagram"
        console.log(user+website)
    }
}



//arrow function and this keyword
//this tells about current context 

const users={
    usernaam:"abcs",
    web:"yt",
    welcome:function(){
        console.log(`${this.usernaam}, welcomee`)
        console.log(this)
    }
}
users.welcome()
console.log(this)

function chai(){
    const u="a"
    console.log(this.u)
}
chai()
//in this it gives error but in browser it gives undefined

//arrow function
