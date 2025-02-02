const user = {
    username: "hitesh",
    price: 199,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`); //hitesh , welcome to website
        console.log(this);
        
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()

console.log(this); // {}

console.log(user.username); //sam



function chai(){
    let username = "hitesh"
    console.log(this.username);    // undefined
    
    
}
chai()


const chai1 = function(){
    let username = "hitesh"
    console.log(this.username); // undefined
}
chai1()


// Arrow function

const chai2 = () => {             
    let username = "hitesh"
    console.log(this.username);   // undefined
}
chai2()
