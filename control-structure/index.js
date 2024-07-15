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
// console.log(`Largest number is ${largest}`);

// Task 4

let day = 5;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Unknown choose 1-7");
    break;
}

// Task 5
let marks = 56;
switch (true) {
  case marks >= 70:
    console.log("A");
    break;
  case marks >= 60:
    console.log("B");
    break;
  case marks >= 50:
    console.log("C");
    break;
  case marks >= 40:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// Task 6
let aNum = 43;
let ternaryResult = aNum % 2 == 0 ? "Even" : "Odd";
console.log(ternaryResult);

// Task 7
let leapYear = 2021;
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not leap year");
}
