// Exercise 1
// let language = prompt("Type in the language in speak: ");
// switch (language.toLowerCase()) {
//     case "french":
//         alert("Bonjour")
//         break;
//     case "english":
//         alert("Hello")
//         break;
//     case "hebrew":
//         alert("Shalom")
//         break;
//     default:
//         alert("01110011 01101111 01110010 01110010 01111001")
// }

// Exercise 2
let grade = Number(prompt("Type in your grade"))

if (grade > 90) {
    console.log("A")
} else if (91 > grade && grade > 80) {
    console.log("B")
}  else if (81 > grade && grade> 69) {
    console.log("C")
}  else if (grade < 70) {
    console.log("D")
}
