const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (item) => {  // foreach koi value return nhi karta h
   //console.log(item);
   
})


// Filter --  yeh value return krta h

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter( (num) => num>4 )
//console.log(newnums); // [ 5, 6, 7, 8, 9, 10 ]


// upper wala example for each se bhi kr skte h

const mynums1 = [1,2,3,4,5,6,7,8,9,10]
const newnums1 = []

mynums.forEach( (num) => {
     if(num>4){
        newnums1.push(num)
     }
})
console.log(newnums1); // [ 5, 6, 7, 8, 9, 10 ]
