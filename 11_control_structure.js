// switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// 



// const userEmail= "test@gmail.com";
const userEmail = [];

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy valuse
// false, 0, -0, BigInt 0n, "", Null, undifined, NaN

// truthy valuse 
// '0', 'false', " ", [], {}, function(){}


if(userEmail.length ===0){
    console.log("Array is empty")
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Objet is empty");
} 

// Nullish Coalescing Operator(??): Nul, undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

val1 = null ?? 10 ?? 20;


console.log(val1)

// Ternary Operator

// condition  ? true : false

const teaPrice = 100;
teaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")