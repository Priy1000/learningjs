// const numbers=[3,5,3,7,8,6]
// const add=numbers.reduce((a,adding)=>a+adding,0)
// console.log(add);

const shoppingcart=[
    {
        dress:"maxi",
        dressprize:800
    },
    {
        dress:"skorts",
        dressprize:1000
    },
    {
        dress:"polo shirt",
        dressprize:750
    }
]
const shouldpay=shoppingcart.reduce((initial,items)=>initial+items.dressprize,0)
console.log(shouldpay);

//mainly its used in shopping carts to calculate total cart prize
