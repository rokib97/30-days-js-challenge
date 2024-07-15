// Task 1
let number = 99;
if (number > 0) {
  //   console.log("Positive");
} else if (number < 0) {
  //   console.log("Negative");
} else {
  //   console.log("Zero");
}

let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// console.log(result);

// Task 2
let age = 25;
if (age >= 18) {
  //   console.log("Eligible to vote..");
} else {
  //   console.log("Not adult to vote yet");
}

// Task 3
let firstNum = 29;
let secondNum = 450;
let thirdNum = 99;

let largest;

if (firstNum >= secondNum) {
  if (firstNum >= thirdNum) {
    largest = firstNum;
  } else {
    largest = thirdNum;
  }
} else {
  if (secondNum >= thirdNum) {
    largest = secondNum;
  } else {
    largest = thirdNum;
  }
}
console.log(`Largest number is ${largest}`);
