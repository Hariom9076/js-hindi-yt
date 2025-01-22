const accountId = 144442
let accountEmail ="hariom@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId =2 //not allowed because it is in const variable

accountEmail = "om@gmail.com"
accountPassword ="123456"
accountCity ="Noida"
let accountState;

/*
prefer not to use var beacuse of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
