DOM (Document Object Model)
Use JavaScript to control HTML elements
Make your website interactive
💡 What is DOM?

👉 DOM = JavaScript ka way to access HTML

👉 Simple:
“JS can change HTML & CSS”

🧠 Example
HTML:
<h1 id="title">Hello</h1>

JS:
document.getElementById("title").innerText = "Hello Pooja";

👉 Output changes on website 

🔍 Selecting Elements (VERY IMPORTANT)
🔹 By ID
let heading = document.getElementById("title");
🔹 By Class
let para = document.getElementsByClassName("text");
🔹 By Tag
let p = document.getElementsByTagName("p");

✏️ Changing Content
heading.innerText = "New Text";

🎨 Changing Style
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";

🖱️ Events (REAL MAGIC 🔥)

👉 When user does something (click, type)

🔹 Button Click

HTML:

<button onclick="changeText()">Click Me</button>
<h1 id="title">Hello</h1>

JS:

function changeText(){
  document.getElementById("title").innerText = "You clicked!";
}
