// for each array ki default property h use direct use kr skte h

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (val){
    //console.log(val);
   
})

coding.forEach( (item,index,arr) =>{  // isme item,index and array pura print hoga
    // console.log(item,index,arr);
     
})



// array k under object [{} {} {}]

const mycoding = [
  {
     langname : "javascript",
     filename : "js"

  },
  {
     langname : "java",
     filename : "java"

  },
  {
     langname : "python",
     filename : "py"

  }
]

mycoding.forEach( (item) => {
    console.log(item.langname);
    
} )