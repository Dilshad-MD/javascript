// function one(){
//     const username = "Dilshad";


//     function two(){
//         const websites = "zenvel";
//         console.log(username);
//     }
//     // console.log(websites);

//     two()
// }
// one()


// if(true){
//     const username = "Dilshad";
//     if(username === "Dilshad"){
//         const websites = " youtube";
//         console.log(username + websites);
//     }
//     // console.log(websites);
// }
// console.log(username);


// ==========================================================//

// 


// arrow function

const user ={
    username: "Dilshad",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our websites`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "nirmal";
user.welcomeMessage()
console.log(this)