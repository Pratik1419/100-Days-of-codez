// Lecture:1

// const project   = {
//   productName: "Parker jotter Standard CT Ball Pen",
//   rating    : 5,
//   offerPrice: "RS.19",
//   price: 300
// };

// const profile = {
//     username: "@Pratik Mishra",
//     posts: 29,
//     followers: 299,
//     following: 500,
//     Bio: "i love to code and sometime i fear from code."
// }
// console.log(profile);

//lecture:2
//Unary Operation
// let num=7;
// let num2=4;
// num++;    //it Print the valeu and then  changes the value
// num2--;

// ++num2;
// --num2;   // Changes first the valeu then print the valeu.

// console.log(num);
// console.log(num2);

//Assignment Operation
// let a = 4;
// let b = 6;
// let c = 10;
// let d = 16;
// a+=3;       //a=a+3.
// b-=6;       //b=b-6.
// c/=2;      //a=a/2.
// d%=8;       //b=b%8.
// console.log("a=", a , "b=" , b);
// console.log("c=", c , "d=" , d);

//Questions-1
// let usernum = prompt("Enter a number");
// if (usernum%5 === 0) {
//     console.log(usernum +" is divisible by 5.");
// } else {
//     console.log(usernum+" is not  a multiple of 5");
// }
//Question-2.a
// let num = 23;
// if (num%10 === 0) {
//     console.log("Good");
// } else {
//     console.log("bad");
// }
//Question-2.b
// let username = prompt( "enter your  name:" );
// let  age = prompt( "How old are you?");
// let mesg = username + ", You are " + age + " years old.";
// alert(mesg);
//Question-2.c
// let a = 1;
// let b = 10;
// let c = 12;
// if (a > b) {
//   if (a > c) {
//     console.log(a, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// } else {
//   if (b > c) {
//     console.log(b, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// }
// Question-2.d
// let str = "Pratik";

// if(str[0]==="y" && str.length>3) {
//     console.log("it is a good string");
// } else {
//     console.log("it is not a good string");
// }

//Leacture:3
// for-of loop.
// let str = "Apancolege";

// let size = 0
// for (let val of str) {
//     console.log("val=", val);
//     size++;
// }
// console.log("String size = ", size);

//for-in loop.
// let student = {
//     name: "Pratik mishra",
//     age: 22,
//     city: "Odisha",
// };

// for (const key in student) {
//     console.log("Key=", key, "value=", student[key]);
// }

//question1.
// for(let num = 0; num<= 100; num++) {
//     if (num%2===0) {
//         console.log("Even number= ", num);
//     }
// }

//question2.
// let gameNumber = 25;
// let userNumber = prompt("Guess the game numnber");
// while (userNumber != gameNumber){
//     userNumber = prompt("you enter the weong number Guess the game numnber");
// }

// console.log("it's is right number");

// let cards = [7, 3, 9];
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);
// }

// let fullName = prompt("Enter your fullname");
// let userName = "@"+ fullName + fullName.length + "!";

// console.log(userName);

//lecture 4
// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for (let val of marks) {
//     sum +=val;
// }
// let avg = sum/marks.length;
// console.log("The average mark is "+avg);

// let companies =  ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let companiy = companies.shift() + companies.splice(2,2,"OLA") + companies.push("Amazon");
// console.log(companies);

//lecture 5
// function sum(x,y) {
//     console.log(x+y);
// }
// sum(10,5);

// function sum(x,y) {
//     total = x+y;
//     return total;
// }
// let s = sum(10,5);
// console.log(s);

// let arrowMult = (a, b) => {
//   console.log(a * b);
// };

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [22,34,55,65,775];

// let squreRoot = ((val,idx,arr) => {
//   console.log(val*2,idx,arr);
// });


// arr.forEach(squreRoot);

//   let num = [1,2,3,4,5];

// let newArr = num.map((val) => {
//   return val*val;
// });
// console.log(newArr);

  // num.forEach((val,idx) => {
  //   console.log(val*val,idx);
  // });


// let arr = [1,2,4,5,73,6,8,35];

// let eveArr = arr.filter((num) => {
//   return num%2 === 0;
// });

// console.log(eveArr);

// let num = [4,2,5,7];
// let sum = num.reduce((accumulator,currentVal)=> {
//   return accumulator * currentVal; 
// });


// console.log(sum);

//questions
// let marks = [90,94,99,25,75,98];

// let newMark = marks.filter((num) =>{
//   return num >= 90;
// });

// console.log(newMark);

//questions
// let n = prompt ("Enter a Number");

// let arr = [];

// for (let i = 1; i <=n; i++){
//   arr[i-1] = i;
// }
// console.log(arr);

// let newArrs = arr.reduce((acc,curr) => {
//   return acc + curr;
// });
// console.log(newArrs);

// let newArrs1 = arr.reduce((acc,curr) => {
//   return acc * curr;
// });
// console.log(newArrs1);


//About DOM
// console.dir(document.body.childNodes[1]);

// let head = document.getElementById("heading");
// console.dir(head);

// let para = document.getElementsByTagName( "p" );
// console.dir(para);

// let elements = document.querySelector("p");
// console.dir(elements);
// let ele2 = document.querySelectorAll( "p" ) ;
// console.dir(ele2);

// let div = document.querySelector("div");
// console.dir(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = "Hello Javascript From Apan College Student";

// let elements = document.querySelectorAll(".box");
// elements[0].innerText = "Hello Me";
// elements[1].innerText = "GoodMorning Me";
// elements[2].innerText = "Bye Me";
// console.dir(elements);

// let idx = 1;
// for (const element of elements) {
//   element.innerText = `new Uniqe values ${idx}`;
//   idx++;
// }

// let divs = document.querySelector("div")
// console.log(divs);

// let id = box.getAttribute("id");
// console.log(id);

// let newBtn = document.createElement("button")
// newBtn.innerText =  "Click me to create a New Element";
// console.log(newBtn);


// question
let btn = document.createElement("button")
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
console.dir(btn);


let body = document.querySelector("body")
body.prepend(btn);