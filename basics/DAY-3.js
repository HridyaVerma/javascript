// why it is confusing string to number

// ******************** operations *****************************

let value=3
let negvalue= -value
//console.log(negvalue)
// negative value is shown in output

console.log(2+2)
console.log(2-2)
console.log(2**2)
console.log(2/3)
console.log(2%3)

let str1="hello"
let str2="hridya"

let str3=str1+str2
console.log(str3);

// problem arises when you add string to number
// if you are seeing this , run this code to understand what I am refering to
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
// agar ek baar string show hua then it follow down flow
console.log(1+2+"2")



let num1,num2,num3
num1=num2=num3=2+2

let gamecounter=1000
gamecounter++; // auto increment
console.log(gamecounter)