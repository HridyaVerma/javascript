// # Primitive(call by value )

// 7 types : String, Number,Boolean,null, undefined ,symbol, BigInt 

const score = 100
const scorevalue = 100.3

const isloggedIn= false
const outsidetemp= null
let userEmail; // undefined(default)

const id=Symbol("123")
const anotherid = Symbol('123')

console.log(id=== anotherid);  // false output beacuse they are unique

const bigNumber =233434234234343242n



// Referance (non primitive) 

// Array ,Onjects,Functions

const heros=["shaktiman","naagaraj","dogga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction=function()
{
    console.log("hello world");
}

console.log(typeof heros) // object 
console.log(typeof myfunction) //function 
console.log(typeof score) // number
console.log(typeof scorevalue) //number
console.log(typeof outsidetemp) // object


//we can also print a table 

console.table([heros,myfunction,score,scorevalue,outsidetemp]);

