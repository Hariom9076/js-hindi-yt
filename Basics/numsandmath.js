const score  = 400
console.log(score);// 400


const balance = new Number(100)
console.log(balance);// [Number:100]

console.log(balance.toString());// 100  it is convert into string form
console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); //100.00

const othernumber = 23.899
console.log(othernumber.toPrecision(2));//24
console.log(othernumber.toPrecision(3));//23.9
console.log(othernumber.toPrecision(4)); //23.90

const othernumber1 = 123.899
console.log(othernumber1.toPrecision(2)); //1.2e+2
console.log(othernumber1.toPrecision(3)); //124
console.log(othernumber1.toPrecision(4)); //123.9

const hundreds = 1000000

console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//-------MATHS--------

console.log(Math.abs(-4)); //4
console.log(Math.abs(4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.5)); //5
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,5,6)); //3
console.log(Math.max(4,3,5,6)); //6

console.log(Math.random()); //value 0 se 1 k beech me kch bhi aa skti h

console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min);