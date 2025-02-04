const useremail = "hariom@gmail"

if(useremail){
    console.log("got the user email");
    
}
else{
    console.log("don't have user email");
    
}


// falsy values : false , 0, -0, BigInt 0n, "" , null, undefined, NaN

// Truthy valuse : "0" , 'false', "false" , " " , [], {} , function(){}


// ---- Nullish coalescing operator(??) --   null , undefined 

let val1;
val1= 5??10
console.log(val1);  // 5

let val2;
val2= null??10
console.log(val2); // 10

let val3;
val3= undefined??15
console.log(val3);  // 15


let val4;
val4= null??10??20
console.log(val4); // 10



// --- Ternary Operator 

// condition ? true : false

const price =100
price <= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80

