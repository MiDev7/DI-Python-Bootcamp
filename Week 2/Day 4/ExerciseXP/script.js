// // Exercise 1
// function infoAboutMe() {
//     console.log("My name is Mikaia. I am currently 18 years old. My hobbies are music and programming.")
// }

// infoAboutMe()

// // Exercise 2
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log("Your name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor )
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// // Exercise 3
// function calculateTip(){
//     let bill = Number(prompt("How much is the bill: "))
//     if (bill < 50 ) {
//         tip = bill * 0.2
//     } else if (bill > 50 && bill < 200) {
//         tip = bill * 0.15
//     } else if (bill > 200) {
//         tip = bill * 0.10
//     }
//     console.log("Here is the tip you paid: $" +  tip + " Here is the final amount: $" + (tip+bill))
// }

// calculateTip()
// // Exercise 3

// function isDivisible(divisor) {
//     divisor = Number(prompt("Type a divisor: "))
//     let outcome = [];
//     for (let i = 0; i < 501 ; i++){
//         if ((i % divisor) == 0){
//             outcome.push(i)
//         } 
//     }
//     console.log("Outcome: " + outcome.join(" "))
//     let sum = outcome.join("+")
//     console.log ("Sum: " + eval(sum))
// }

// isDivisible()

// Exercise 4

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList=["banana" , "orange" ,"apple"]
console.log(stock[shoppingList[0]]) // To call an object details from an array
function myBill(){
    
    let sum= 0;
    for ( let x in shoppingList ){
        if ( stock[shoppingList[x]] !==0){
        sum=sum+ prices[shoppingList[x]]
        }
    }
    return sum
}
console.log("My bill is " + myBill())