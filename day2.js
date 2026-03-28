🔀 if / else Statement
🔹 Syntax:
if(condition){
  // code if true
}else{
  // code if false
}
🔹 Example:
let age = 20;

if(age >= 18){
  console.log("You are an adult");
}else{
  console.log("You are a minor");
}

👉 Output: You are an adult

🔁 else if (Multiple Conditions)
let marks = 75;

if(marks >= 90){
  console.log("Grade A");
}else if(marks >= 60){
  console.log("Grade B");
}else{
  console.log("Grade C");
}
⚖️ Comparison Operators

Used inside conditions:

== → equal to
=== → equal (value + type) ⭐
!= → not equal
> → greater than
< → less than
>= → greater than equal
<= → less than equal
🧠 Logical Operators
&& → AND (both true)
|| → OR (any one true)
! → NOT (reverse)
Example:
let age = 20;

if(age > 18 && age < 25){
  console.log("Young adult");
}
🔁 Loops (Repeat code)
💡 Why loops?

To run code again and again automatically

🔄 for Loop (most important)
🔹 Syntax:
for(initialization; condition; update){
  // code
}
🔹 Example:
for(let i = 1; i <= 5; i++){
  console.log(i);
}

👉 Output:
1 2 3 4 5

🔄 while Loop
🔹 Syntax:
let i = 1;

while(i <= 5){
  console.log(i);
  i++;
}
🔄 do...while Loop

Runs at least once

let i = 1;

do{
  console.log(i);
  i++;
}while(i <= 5);
