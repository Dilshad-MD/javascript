// Xor Operator

// console.log(5^1)

// lest shift operator

// console.log(5<<1)

// console.log(5>>2);

// unsigned right shift operator
// console.log(5>>>1);

// Functions

// function name(num1, num2, ){
//     return num1 + num2;
// }
// let result = name(5, 3);
// console.log(result)

// function print(){
//     for(let i=0 ; i<10; i++){
//         console.log(i)
//     }
// }
// print()

// function addTwoNumber(num1, num2){
//     return num1 + num2;
// }
// console.log(addTwoNumber(3, 4))


// function addTwoNumber(num1, num2){
//     return num1 + num2;
// }
// let result = addTwoNumber(3, 4);
// console.log("Result :", result )


// function loginUserMessage(user){
//     return `${user} Just Logged in `;
// }
// console.log(loginUserMessage("Dilshad"));


// function loginUserMessage(user){
//     return ` Just Logged in `;
// }
// console.log(loginUserMessage("Dilshad"));



// function loginUserMessage(user){
//     if(user === undefined){
//         console.log("Please Enter your user name");
//         return;

//     }
//     return `${user} just logged in`;
// }
// console.log(loginUserMessage("Dilshad"));



// function loginUserMessage(user){
//     if(user === undefined){
//         console.log("Please Enter your user name");
//         return;

//     }
//     return `${user} just logged in`
// }
// console.log(loginUserMessage());



// function loginUserMessage(user){
//     if(!user){
//         console.log("Please Enter your user name");
//         return;

//     }
//     return `${user} just logged in`
// }
// console.log(loginUserMessage());



function loginUserMessage(user = "Nirmal"){
    if(!user){
        console.log("Please Enter your user name");
        return;

    }
    return `${user} just logged in`
}
console.log(loginUserMessage());