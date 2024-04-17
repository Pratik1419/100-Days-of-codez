// let btn1 = document.querySelector( "#btn1" );
// let div = document.querySelector("#box");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX);

// };

// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// btn1.addEventListener("click", ()=>{
//     console.log("Button was clicked - handler1");
// })

// btn1.addEventListener("click", ()=>{
//     console.log("Button was clicked - handler2");
// })

// const handler3 = () => {
//     console.log("Button was clicked - handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.removeEventListener("click", handler3);  //removes

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log("You clicked the button!");
// });