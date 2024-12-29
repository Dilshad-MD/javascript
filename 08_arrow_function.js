// function hello(){
//     console.log(this)
// }
// hello()


// const addtwo = (num1 , num2)=>{
//     return num1 + num2;

// }

// console.log(addtwo(3, 4))

// const addtwo = (num1 , num2)=>  num1 + num2;
// console.log(addtwo(3, 4))


// const addtwo = (num1 , num2)=>  (num1 + num2);
// console.log(addtwo(3, 4))


// const addtwo = (num1 , num2)=>  {username : "Dilshad "} ;
// const addobj = (num1 , num2)=>  ({username : "Dilshad "} );

// console.log(addtwo(3, 4))
// console.log(addobj(3, 4))


// IIFE function = Immediately Invoked Function Expression

(function hello(){
    console.log("DB Connect");
})();


(()=>{
    console.log("DB Connedted ");
})();

((name)=>{
    console.log(`DB Connedted ${name}`);
})("Dilshad")
