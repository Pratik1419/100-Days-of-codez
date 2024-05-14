const users = ["Max", "Roy", "Joy"];

for (const user of users) {
    console.log(user);
}

const loggedId = {
    name: "Roy",
    age: 22,
    isAdmin: true
};

for (const key in loggedId ) {
    console.log(loggedId[key]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to quit")   //By using confirm it will gives us the result with yes/no value.
}

console.log('done!');