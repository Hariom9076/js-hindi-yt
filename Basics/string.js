const name= "hariom"
const repocount = 50

//console.log(name + repocount + " value"); //we don't use this old method

//we use string interpolation

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


///another way of string declaration

const name1 = new String('hariom-9076')
console.log(name1[0]); // h
console.log(name1.length); //11
console.log(name1.toUpperCase());//HARIOM-9076
console.log(name1.charAt(2)); //r
console.log(name1.indexOf('r'));//2

const newstring = name1.substring(0,4)
console.log(newstring); //hari

const anotherstring = name1.slice(-8,5) //reverse se start krega
console.log(anotherstring); //io


const newstring1 = "  hariom  "
console.log(newstring1); //    hariom   
console.log(newstring1.trim()); //hariom   here remove the space left and right side

const url = "https://hariom.com/hariom%20singh"
console.log(url.replace('%20','-')); //https://hariom.com/hariom-singh


console.log(url.includes('hariom')) //true   it give true or false value

console.log(name1.split('-')); //['hariom','9076']   it gives as word form in array
