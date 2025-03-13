let score=33
let num="33"

console.log(typeof score)
console.log(typeof num)

// type conversion

let valueinnumber=Number(num)
console.log(typeof valueinnumber)

//now let's take a exmaple , invesitgation of typeconverison 

let marks="33abc"
let convert=Number(marks)
console.log(typeof convert)
// this will give type as number , but 33abc should not be converted in number
// now if we print the value after conversion
console.log(convert)

// now this convert will give "NaN" 
// this is special data type 
//"33"=33
//"33abc"=NaN
//"TRUE"=1


let isloggedIn=1
let booleanisloggedIn=Boolean(isloggedIn)
console.log(booleanisloggedIn)
// 1 is conveted in true 
// 0 to false 
//empty string false
//"hridya"==> true


let somenumber=33
let stringnumber=String(somenumber)
console.log(stringnumber)
