let firstNum = 10;
let firstName = "hasan";
let isAdmin = true;
const myFavNum = [23, 44, 76, 99, 89, 101];
const firstUser = {
  name: "mahmub",
  age: 24,
  subjects: ["bangla", "english", "math"],
  hasMoney: false,
  child: {
    name: "nusrat",
    age: 7,
    isCrying: false,
  },
};
// console.log(`Number Value: ${firstNum} and Type is ${typeof firstNum}`);
// console.log(`String Value: ${firstName} and Type is ${typeof firstName}`);
// console.log(`Boolean Value: ${isAdmin} and Type is ${typeof isAdmin}`);
// console.log(`Array Value: ${myFavNum} and Type is ${typeof myFavNum}`);
// console.log(
//   `Object Value: ${JSON.stringify(firstUser)} and Type is ${typeof firstUser}`
// );

// re-assignment
let myMark = 240;
myMark = 780;
// console.log(myMark);

const newUSer = {
  name: "Khalid",
  age: 24,
};
newUSer.age = 35; //possible to chnage the property
console.log(newUSer);
try {
  newUSer = "ava"; // not possible to assign new data type
} catch (error) {
  console.log(
    `Error hoise mama, you can't re-declare const variable. Error : ${error.message}`
  );
}
