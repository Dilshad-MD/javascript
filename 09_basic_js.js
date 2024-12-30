// javascript execution context


// this code run own browser to understand execution cotext and global execution mand memory creation phase and execution phase how to act program 

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2);
let result2 = addNum(10, 2)