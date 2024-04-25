// let paraElement = document.querySelector("p");
let textElement = document.querySelector("input");

// function changePara() {
//   paraElement.textContent = "clicked!";
//   console.log("Event Fired");
// }

function countText() {
    let enterText = textElement.value;
    console.log(enterText);
  }

// paraElement.addEventListener("click", changePara);
textElement.addEventListener("input", countText);
