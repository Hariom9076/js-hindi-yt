//----- Number conversion
let score ="33"

console.log(typeof (score));//string

let valueInNumber = Number(score)//string ko number me convert krta h
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//output 33 aayega



let score1 ="33abc"

console.log(typeof (score1));//string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);// output = number
console.log(valueInNumber1); //NaN output aayega


let score2 =null

console.log(typeof (score2));//object

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);// output = number
console.log(valueInNumber2); // output = zero


let score3 = undefined

console.log(typeof (score3));//undefined

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);// output = number
console.log(valueInNumber3); // output = NaN


let score4 = true

console.log(typeof (score4));//boolean

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);// output = number
console.log(valueInNumber4); // output = 1


//------ boolean conversion

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn) //output = true

// 1 => true , 0 => false
//"" => false , "hitesh" => true


//----- string conversion

let somenumber =33
let stringnumber = String(somenumber)
console.log(stringnumber) // 33
console.log(typeof stringnumber) // string



//---operations

let value =3;
let negvalue = -value;
console.log(negvalue);//-3 ans

console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2/2); //1
console.log(2**3); //8   yeh 2 ki power 3 bana deta h
console.log(2%3); //2


let str1 = "Hello"
let str2 = " Hariom"

let str3 = str1 + str2
console.log(str3);//Hello Hariom

console.log("1" + 2); //12
console.log(1 + "2");//12
console.log("1" + 2 + 2); //122
/*
if string come first then all treat as string and comes last then first will conversion nd then 
string operation
*/
console.log(1 + 2 + "2"); //32  here string come last so first conversion

console.log(true); //true
console.log(+true); //1
console.log(+""); //0


