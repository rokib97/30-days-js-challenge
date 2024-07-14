let num1 = 20;
let num2 = 3;

let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

// console.log(`Add : ${add}`);
// console.log(`Minus : ${sub}`);
// console.log(`Multiplications : ${mult}`);
// console.log(`Division : ${div.toFixed()}`);
// console.log(`Reminder : ${mod}`);

let myMoney = 730;
let isRainy = false;
if (myMoney > 500 && isRainy) {
  console.log(`i will buy burger..`);
} else if (myMoney < 500 || isRainy) {
  console.log(`I will not went out..`);
} else {
  console.log(`I will sleep...`);
}
console.log(
  myMoney >= 1000 ? "I will buy a shirt" : "i Will nopt buy anything..."
);
