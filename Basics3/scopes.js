var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);  //  ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30         aana 300 chahiye the prr 30 aya isliye var nhi use krte h



let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("inner:" , a); // 10
    
}
console.log(a); // 300
