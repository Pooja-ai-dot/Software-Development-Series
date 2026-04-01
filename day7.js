What is an Array?

Array = store multiple values in one variable

let numbers = [1, 2, 3, 4, 5];
Access Values
console.log(numbers[0]); // 1
console.log(numbers[2]); // 3

👉 Index starts from 0

🔹 Add Values
numbers.push(6); // add at end
🔹 Remove Values
numbers.pop(); // remove last
🔹 Loop Through Array
let fruits = ["apple", "banana", "mango"];

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
// Output: apple , banana, mango

let colors = ["red", "blue", "green"];
console.log(colors[1]);
// Output: red

let numbers = [10, 20, 30];

for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
// Output: 10, 20, 30

👉 Find sum of all numbers

let nums = [1, 2, 3, 4];
let sum = 0;

for(let i = 0; i < nums.length; i++){
  sum += nums[i];
}

console.log(sum);
// Output: 10
