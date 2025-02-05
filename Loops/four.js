// for of loop object me nhi lgta h  for in loop ka use krte h

const myobject ={
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop h yeh
for (const key in myobject) {
    //console.log(key);  // yeh key dega
    
}

for (const key in myobject) {
    //console.log(myobject[key]); // yeh value dega
    
}


// array me for in loop kaam krta h ky?

const programming = ["cpp","js","py","java"]
for (const key in programming) {
    console.log(key); // yeh index dega output me  0 1 2 3 
    
}