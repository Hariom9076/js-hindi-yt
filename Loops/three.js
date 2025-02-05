// for of   loop   kisi pe bhi laga skte h array pe string pe object pe etc

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
    
}



// Maps --- unique value aur same order me rkhta h value ko

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
//console.log(map);

for (const key of map) { // yeh pura print krta h ek saath
    //console.log(key);
    
}

for (const [key,value] of map) { // agar key chahiye ya sirf value chahie toh woh print krega
    console.log(key,':-',value);
    
}