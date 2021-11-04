//Make two variables called first and last
//then log them out together as your name
// 1. Make first variable
let first = "Madi";
//2. Make last variable
let last = "Kirkman";

// Log them out with space between them
console.log(first + " " + last);

//log whenever someone clicks a button on the page

//Make a variable for the button
var button = document.querySelector("button");

//Define a function that
function logName() {
  console.log(first + " " + last);
}

function appendName() {
  // Create p element
  let p = document.createElement("p");

  // Put text inside p element
  p.innerText = first + " " + last;

  // Append the p element as a child of the page's body
  document.body.appendChild(p);
}

//Attach function to click on button
button.addEventListener("click", appendName);

//Whenever someone clicks the button, add a paragraph to the page that has your name

//Make an array of your 3 fav hobbies
let hobbies = ["Soccer", "Reading", "Netflix"];

let ul = document.createElement("ul");
//Loop through the array and log each item using console.log()
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);
