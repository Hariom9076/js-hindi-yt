const myarr = [0,1,2,3,4,5]
console.log(myarr[0]);

const myheros = ["shaktiman","naagraj"]
console.log(myheros[0])
const myarr2 = new Array(1,2,3,4)
console.log(myarr2[0])


//array methods---

myarr.push(6) // 6 add last me [0,1,2,3,4,5,6]
myarr.push(7)  // 7 add last me [0,1,2,3,4,5,6,7 ]
myarr.pop() // 7 remove [0,1,2,3,4,5,6]
myarr.unshift(9) // 9 add start me and sb shift ho jayega [9,0,1,2,3,4,5,6]
myarr.shift() // 9 remove ho jayega aage se [0,1,2,3,4,5,6]
console.log(myarr.includes(9)); //false
console.log(myarr.indexOf(9)); // -1


console.log(myarr); // [0,1,2,3,4,5,6]

const newarr = myarr.join() // array element ko string me add kr deta h

console.log(myarr); // [0,1,2,3,4,5,6]
console.log(newarr); // 0,1,2,3,4,5,6
console.log(typeof newarr); // string


//--- slice and splice method

console.log("A ", myarr); // A  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myarr.slice(1,3)

console.log(myn1); // [ 1, 2 ]
console.log("B ", myarr); // B  [ 0, 1, 2, 3, 4, 5, 6 ]

/* 
splice remove kr deta h jis part ko hm splice krte h
*/
const myn2 = myarr.splice(1,3)
console.log("C ", myarr); // C  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]

