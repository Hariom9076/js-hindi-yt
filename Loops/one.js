// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}


// array 
let myarray = ["flash" ,"batman","superman"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);  
}


// Break      loop se break ho jata h

for (let index = 1; index <=20; index++) {
       if(index==5){
         console.log(`detected 5`);
          break
      }
    console.log(`value of i is ${index}`);
    
}


// Continue--      skip kr deta h statement ko

for (let index = 1; index <=20; index++) {
       if(index==5){
         console.log(`detected 5`);
          continue
      }
    console.log(`value of i is ${index}`);
    
}
