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


let person  = {
  name : 'John',
  greet() {
    console.log('hello! my name is ' + this.name);
  }
}

person.greet();