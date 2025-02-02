function saymyname (){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("O");
    console.log("M");
    
}
//saymyname()

function addtwonumbers (number1,number2){
    console.log(number1+number2); //7
    
}
addtwonumbers(3,4) 



function addtwonumbers (number1,number2){
    console.log(number1+number2); // 7
    
}
const result1 = addtwonumbers(3,4)
console.log(result1);  //undefined



function addtwonumbers1(number1,number2){
    let result = number1+number2
    return result
}
const result = addtwonumbers1(3,5)
console.log("Result:",result); // 8



function addtwonumbers1(number1,number2){
     
    return number1+number2
}
const result2 = addtwonumbers1(3,5)
console.log("Result2:",result2); // 8



function loginusermessage(username){
    return `${username} just logged in`
}
console.log(loginusermessage("hariom"))



function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,300,1000)); // [ 200, 300, 1000 ]



// how to pass object in function

const user = {
    username: "hariom",
    price: 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)   



// how to pass array in object 

const mynewarray = [200,400,100,6000]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray)); // 400

