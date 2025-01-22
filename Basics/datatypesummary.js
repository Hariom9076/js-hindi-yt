//----- Primitive Datatypes  - call by value bhi kehte h ise

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
/*
symbol value ko unique bana deta h chahe isme value kyu hi na same ho 
*/
console.log(id == anotherId); //false

const bigNumber = 7378687478979383987767867n


//---- Non-Primitive - Reference bhi kehte h ise

// Array , Objects, Functions

const heros = ["shaktiman" ,"naagraj" , "doga"]  //array

let myObj = {
    name:"Hariom", //Object
    age: 20,
}


const myfunction = function(){
    console.log("Hello world");   //function
    
}

