 What is an Object?
 Object = collection of key-value pairs

let person = {
  name: "Pooja",
  age: 20,
  city: "Delhi"
};

Array = list 
Object = details about one thing.

🔍 Access Data
🔹 Method 1 (dot notation)
console.log(person.name); // Pooja
🔹 Method 2 (bracket notation)
console.log(person["age"]); // 20

✏️ Update Values
person.age = 21;

➕ Add New Property
person.country = "India";

❌ Delete Property
delete person.city;

🔁 Loop through Object
for(let key in person){
  console.log(key + ": " + person[key]);
}
👉 Output:
name: Pooja
age: 20
city: Delhi

🧠 Object inside Array:
let students = [
  {name: "Pooja", marks: 90},
  {name: "Rahul", marks: 80}
];

console.log(students[0].name); // Pooja
