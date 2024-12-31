// if

// if (condition){
//     // structure of if
// }

// const temperature =40;

// if(temperature < 50){
//     console.log("Yes temperature is less than 50")
// }
// else{
//     console.log("Temperature is greater than 50")
// }

// function temperature(temp){

//     if(temp < 50){
//         console.log("Yes temperature is less than 50");
//     }
//     else{
//         console.log("Temperature is greater than 50");
//     }
//     return temp;
// }
// temperature(51);

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     // var power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// sort hand notation and implecit scope

// const balance = 1000;
// if(balance >400) console.log("test")

// if (balance < 400) {
//   console.log("less than 400");
// } else if (balance < 600) {
//   console.log("less than 600");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1100");
// }

const balance = 1000;

const userLoggedIn = true;
const debitCard = true;
// const debitCard = false;


if(userLoggedIn && debitCard && 2==2){
    console.log("User allows to by courses");
}else{
    console.log("User not allow to by courses");
    
}


const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(loggedInFromGoogle || loggedInFromEmail){
    console.log(" User logged in ")
}
