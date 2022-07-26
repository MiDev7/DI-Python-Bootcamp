// Exercise 1
let x = 5;
let y = 2;
if (x > y) {
    console.log(x + " is the biggest number")
}
else if (y > x) {
    console.log(y + "is the biggest number")
}


// Exercise 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed")
} else {
    console.log("I don't care, I prefer cats")
};

// Exercise 3
let number = Number(prompt("Type in a number: "));
let regex = /^\d*[13579]$/;
if (regex.test(number)) {
    console.log(number + " is an odd number")
} else {
    console.log(number + " is an even number")
};

// Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0) {
    console.log("no one is online")
} 
else if (users.length == 1) {
    console.log(users[0] + " is online")
}
else if (users.length == 2) {
    console.log(users[0] + " and " + users[1] + " are online")
}
else if (users.length > 2) {
    console.log(users[0] + " , " + users[1] + " and " + (users.length-2) + " more are online")
}