// const pro_one=new Promise(function (resolve,reject){
//     setTimeout(function(){
//            console.log('async executed')
//            resolve()
//     },1000)
// })
// pro_one.then(function(){
//     console.log('promise consumed')
// })


// new Promise((resolve, reject) => {
//      setTimeout(function(){
//             console.log('executed async');
//             resolve()
//      },5000)
// }).then(function(){
//     //then is the one which links resolve
//     console.log('promise consumed');
    
// } ) 

// pro_three=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('executed')
//         resolve({name:'priya',location:'japan'})   
//     },4000)
// }) 

// pro_three.then(function(details){
//     console.log(details);
    
// })


// const pro_four=new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let err=false 
//         if(!err){
//              resolve({name:'abc',company:'hennge'})
//         }else{
//             reject('error message : errorrr')
//         }
          
//     },1000)
// })

// pro_four.then(function(deetz){
//     console.log(deetz);
//     return deetz.name
    
// })
// .then((name)=>{console.log(name);
// })
// .catch(function(error){
//     console.log(error) 
// })
// .finally(function(){
//     console.log('executed');
    
// })


// const pro_five=new Promise((resolve, reject) => {
//      setTimeout(function(){
//         let err=false 
//         if(!err){
//              resolve({name:'abc',company:'hennge'})
//         }else{
//             reject('error message : errorrr')
//         }
          
//     },1000)
// })

// async function getrequired() {
//     try {
//         const reply=await pro_five 
//         console.log(reply);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getrequired()

//(instead of then and catch we can also use async await)

// async function getinfo(){
//     try {
//         const request=await fetch('https://randomuser.me/api/')
//         const info=await request.json()
//         console.log(info);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getinfo()

// fetch('https://randomuser.me/api/')
// .then((reply)=>{
//     return reply.json()
    
// })
// .then((infor)=>{
//     console.log(infor);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

const promise1=new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('tiger');
        
    },5000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('lion');
        
    },5000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('cheetah');
        
    },5000)
})



Promise.all([promise1,promise2,promise3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{console.log(error)})