💡 What is a Function?

Function = a block of code that runs when called

👉 Simple meaning:
“Write once, use many times”

🔹 Syntax:
function functionName(){
  // code
}
🔹 Example:
function greet(){
  console.log("Hello Pooja 👋");
}

greet(); // calling function
Output: Hello Pooja
🔹 Function with Parameters
function greet(name){
  console.log("Hello " + name);
}

greet("Pooja");
greet("Rahul");
Output: Hello Pooja 
Hello Rahul
🔹 Function with Return
function add(a, b){
  return a + b;
}

let result = add(2, 3);
console.log(result);

👉 Output: 5


🟢 Basic Practice
// 1. Add two numbers
function add(a, b){
  return a + b;
}
let result = add(3, 5);
console.log(result)

Output: 8
// 2. Check even or odd
function checkEven(num){
  if(num % 2 === 0){
    return "Even";
  } else {
    return "Odd";
  }
}
let result = checkEven(2);
console.log(result);
Output: Even

// 3. Find greater number
function findGreater(a, b){
  if(a > b){
    return a;
  } else {
    return b;
  }
}
let result = findGreater(4,8);
console.log(result);
Output:8


// 4. Check adult or minor
function checkAge(age){
  if(age >= 18){
    return "Adult";
  } else {
    return "Minor";
  }
}
let result= checkAge(19);
console.log(result);
Output: Adult

👉 Create a file: day3.js

Build this:
function introduce(name, age, city){
  return "My name is " + name + ", I am " + age + " years old and I live in " + city;
}

console.log(introduce("Pooja", 20, "Delhi"));
Output: My name is Pooja, I am 20 years old and I live in Delhi.
