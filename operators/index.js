// Task 1
let firstNum = 10;
let secondNum = 3;
let addResult = firstNum + secondNum;
let subResult = secondNum - firstNum;
let multResult = firstNum * secondNum;
let divResult = secondNum / firstNum;
let modResult = secondNum % firstNum;
// console.table([addResult, subResult, multResult, divResult, modResult]);

// Task2
let newNum = 10;
// console.log((newNum += 10));
let anotherNum = 20;
// console.log((anotherNum -= 10));

// Task 3
let bigNum = 900;
let smallNum = "900";
// console.log(bigNum > smallNum);
// console.log(bigNum < smallNum);
// console.log(bigNum >= smallNum);
// console.log(bigNum <= smallNum);
// console.log(bigNum == smallNum); // check the value only
// console.log(bigNum === smallNum); // cheack value and data type

// Task 4
let num1 = 99;
let num2 = 69;
let isAdmin = false;

const result1 = num2 < num1 && isAdmin == true; // both side must be true
const result2 = num2 < num1 || isAdmin == true; // if any side is true => true
const result3 = !isAdmin && num2 < num1; // not represent the opposite of a value
// console.log(result1);
// console.log(result2);
// console.log(!result3);

// Task 5
let value = 10;
const ternaryResult = value > 0 ? "Positive" : "Negative";
const ternaryResul2 = value > 0 ? "Positive" : value < 0 ? "negative" : "zero"; //nested ternary
// console.log(ternaryResult);
// console.log(ternaryResul2);
