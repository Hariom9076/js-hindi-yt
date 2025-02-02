function chai(){
    console.log("db connected");  // db connected 
}
chai();


// this is named iife
(function chai(){
    console.log("db connected"); // db connected 
})
();

// or
(function chai(){
    console.log("db connected"); // db connected 
})();


// use of arrow function in iife

(() => {
    console.log("db connected"); // db connected 
})()