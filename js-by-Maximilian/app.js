//  let course = ["Math"];
//  let price = [ 1000];
//  let mainGoals = ["To improve time to complte the task in time"];

//  alert (course);
//  alert (price);
//  alert (mainGoals);

// let courses = {
//   course: "Math",
//   price: 3000,
//   mainGoals: ["To improve time to complte the task in time","To improve myself","Take less time to solve"],
// };
// alert(courses.course);
// alert(courses.mainGoals[1]);
// alert(courses.price);

// function getListItem(array,arrayIndex) {
//   let arrayElement = array[arrayIndex];
//   return arrayElement;
// }

// let firstGoal = getListItem(courses.mainGoals, 0);
// alert(firstGoal);

// let person  = {
//   name : 'John',
//   greet() {
//     console.log('hello! my name is ' + this.name);
//   }
// }

// person.greet();

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
// answers:-
let heading = document.body.children[0];
console.dir(heading);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element),
console.dir(heading.parentElement); // body
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
console.dir(heading.nextElementSibling); // p

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable
let headings = document.getElementById("headings");

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
let paragraph = document.querySelector(".para");
console.dir(paragraph);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
paragraph.textContent = "This is some random text";

// Create the new element.
// let newElement = document.createElement("a");
// newElement.href = "https://facebook.com";
// newElement.textContent = "Dive into facebook";
// let para = document.querySelector("p");

// para.append(newElement);
// console.dir("newElement");


// How to delete a elements?
// let delteelement = document.querySelector("h1");
// delteelement.remove();

// Move a elements
// paragraph.parentElement.append(paragraph);