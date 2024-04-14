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

// +++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non- Primitive)   //(types of memory)

let myname="hridya"
let anothername= "hirdu";
anothername="chaiaurcode";

console.log(anothername);
console.log(myname);

let userone={
    email :"hridyavema3@gmail.com",
    upi: "user@ybl" 
} 

let usertwo= userone

usertwo.email="hridyaverma@google.com"

console.log(userone.email)
console.log(usertwo.email)  
// both will be same as email in userone 
//also gets changed when we changed the value of email in usertwo
// becuase both are getting referance from same heap 

