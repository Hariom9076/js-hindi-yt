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




// memory -------

// two types memory stack(used in primitive datatype), heap(used in non-primitive datatype)

//stack used
let myname ="hariom@gmail.com"
let anothername = myname
anothername = "hari@gmail.com"
console.log(myname);
console.log(anothername);


//Heap used

let userone ={
    email:"user@gmail.com",
    upi:"user@gbl"
}

let usertwo = userone

usertwo.email = "hariom@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

