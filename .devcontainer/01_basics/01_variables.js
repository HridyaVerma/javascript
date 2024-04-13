const accountid=12345;
let email="hridyaverma3@gmail.com";
var accountpassword=12121211;

// we don't use var because of issue in block scope and function scope

console.log(accountid);
console.table([email,accountid,accountpassword]);
// when we have to print mutiple variables in single go we use console.table([]);