// for loops

// for(let i=0; i<10; i++){
//     console.log(i)
// }

// for(let i=-1; i<=10; i++){
//     console.log(i)
// }

// for(let i =0; i<10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is a odd number");
//     }
//     console.log(element)
// }


// for(let i=0; i<=10; i++){
//     console.log(`Outer loop value : ${i}`);
//     for(let j=0; j<=10; j++){
//         // console.log(`Inner loop value : ${j} and inner loop ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j)
//     }
    
// }

// for(let i=1; i<=2; i++){
//         console.log(`Outer loop value : ${i}`);
//         for(let j=1; j<=10; j++){
//             // console.log(`Inner loop value : ${j} and inner loop ${i}`);
//             console.log(i + ' * ' + j + ' = ' + i*j)
//         }
        
//     }

for (let j = 1; j <= 10; j++) {
    // console.log(`2 * ${j} = ${2 * j}`);
    // console.log('2'+ '*' + j + ' = ', 2*j) 
}


// let myArray = ["Nirmal", "Niranjan", "Salman"];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
    
// }



// break and continue

// for(let i=0; i<= 10 ; i++){
//     if(i==5){
//         console.log("5 is dedected ");
//         break;
//     }
//     console.log(i)
// }


for(let i=0; i<= 10 ; i++){
    if(i==5){
        console.log("5 is dedected ");
        continue;
    }
    console.log(i)
}