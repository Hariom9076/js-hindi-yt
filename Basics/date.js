//Dates---

let mydate = new Date()

console.log(mydate); //
console.log(mydate.toString()); // Mon Jan 27 2025 06:58:48 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString()); // Mon Jan 27 2025
console.log(mydate.toLocaleString()); // 1/27/2025, 6:58:48 AM

console.log(typeof mydate); //object

let selfdate = new Date(2023,0,23)
console.log(selfdate.toDateString()); // Mon Jan 23 2023


let selfdate1 = new Date(2023,0,23,5,3)
console.log(selfdate1.toLocaleString()); // 1/23/2023, 5:03:00 AM


let selfdate2 = new Date("2023-01-14") //yy-mm-dd formate
console.log(selfdate2.toLocaleString()); // 1/14/2023, 12:00:00 AM

let selfdate3 = new Date("01-14-2023") //mm-dd-yy formate
console.log(selfdate3.toLocaleString()) // 1/14/2023, 12:00:00 AM


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(selfdate.getTime());

console.log(Math.floor(Date.now()/1000)); //convert the milliseconds into seconds time 


