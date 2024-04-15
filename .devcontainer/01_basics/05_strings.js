const name="hridya";
const repocount=50;

console.log(name + repocount);


console.log(`this is my ${name} and this is my repo count ${repocount}`);

// a better way of printing string 

const gamename= new String('hridya');

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length); // to get the length of the string 
console.log(gamename.toUpperCase()); // to convert the the uppercase 
console.log(gamename.charAt(3));  // we the the index to check the character at that position 
console.log(gamename.indexOf('d'));  // to check the index of the character

 const newstring = gamename.substring(0,4);  // start value (0) end value (4) and it runs till (last -1); 

 console.log(newstring);  // hrid (output)

const anotherstring = gamename.slice(-8,4);

console.log(anotherstring);


const newstringone = "    hridya  "
console.log(newstringone);
console.log(newstringone.trim());  // trim() is used to remove the spaces from start and end 

const url="hridyaverma3@gmail.com"

console.log(url.replace('3','4'))   // to replace any value in string from one to another

console.log(url.split('3')); // split on the basis of seperator // here 3 is the seperator 






