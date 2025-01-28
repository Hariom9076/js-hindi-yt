// object literals

const mysym = Symbol("key1")

const jsuser = {
    name : "Hariom",  // yaha pe name bss likha hota h prr real me "name" string me hota h
    age : 21,
    "full name" : "hariom chaurasiya",
    [mysym] : "mykey1",  // symbol ko aese use krte h []
    location : "delhi",
    email : "hariom@gmail.com",
    isloggedin : false,
    lastloginday : ["monday" ,"saturday"]
}

console.log(jsuser.email); // hariom@gmail.com
console.log(jsuser["email"]); // hariom@gmail.com   //object ko access krne ka yeh tarika best h 
console.log(jsuser["full name"]); // hariom chaurasiya // kyuki yeh key agar krna h toh yehi krenge dot wala 
//nhi use krte h baaki shi woh bhi h
console.log(jsuser[mysym]); // mykey1
console.log(typeof jsuser[mysym]);  //string


jsuser.email = "hariom90@gmail.com"
//Object.freeze(jsuser) //object ko freez krne se change nhi kr skte h isme

jsuser.email = "hariom89@gmail.com"
//console.log(jsuser); // yaha pura jsuser ka object print ho jayega


jsuser.greeting = function(){
    console.log("hello js user");
    
}
// console.log(jsuser.greeting); // [Function (anonymous)]
console.log(jsuser.greeting()); // hello js user

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greetingtwo()); // hello js user,Hariom

console.log(jsuser);

