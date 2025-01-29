// const tinderuser = new Object()      yeh singleton object h

const tinderuser ={}  // yeh singleton nhi h

tinderuser.id = "123abc"
tinderuser.name = "hariom"
tinderuser.isloggedin = false

console.log(tinderuser); // { id: '123abc', name: 'hariom', isloggedin: false }


const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname: "hariom",
            lastname: "chaurasiya"
        }
    }
}

console.log(regularuser); //{email: 'some@gmail.com',fullname: { userfullname: { firstname: 'hariom', lastname: 'chaurasiya' } }}
console.log(regularuser.fullname); // { userfullname: { firstname: 'hariom', lastname: 'chaurasiya' } }
console.log(regularuser.fullname.userfullname); // { firstname: 'hariom', lastname: 'chaurasiya' }
console.log(regularuser.fullname.userfullname.firstname); // hariom


// one object ko add krna dusre k saath
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {obj1,obj2}  //1st way of object addition
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2)  // 2nd way of obj addtion
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2}  // 3rd way spread operator and yehi use krenge 
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// array k under objects create krna--
const users = [
    {
        id : 1,
        email : "hariom@gmail.com"
    },
    {
        id : 1,
        email : "hariom@gmail.com"
    },
    {
        id : 1,
        email : "hariom@gmail.com"
    },

 ]

users[1].email 
console.log(tinderuser);

console.log(Object.keys(tinderuser)); // [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser)); // [ '123abc', 'hariom', false ]
console.log(Object.entries(tinderuser)); // [ [ 'id', '123abc' ], [ 'name', 'hariom' ], [ 'isloggedin', false ] ]

//hasOwnProperty hmko value ki presence batati h boolean ans deti h
console.log(tinderuser.hasOwnProperty('isloggedin')); //true 



// ---- Object de-structure   

const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "hitesh"
}

//course.courseinstructor        isse bhi access kr skte h but neeche aur tarike h

// const {courseinstructor} = course      yeh aur neeche wala both same h bss name change h dono se access 
// kr skte h hm 

const {courseinstructor: instructor} = course  
console.log(instructor);   // hitesh




// --- JSON (javascript object notation)     
/*
{  } = ise object jaise hi likhte h yeh json h    , [{},{}]= array object ka yeh bhi json h
*/ 


// {
//     "name" : "hariom",
//     "course" : "js in hindi" 
// }
