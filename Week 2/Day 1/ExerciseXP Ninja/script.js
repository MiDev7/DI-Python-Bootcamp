// Exercise 1
5 >= 1
// Prediction: true
// Actual: true
0 === 1
// Prediction: false
// Actual: false
4 <= 1
// Prediction: false
// Actual: false
1 != 1
// Prediction: false
// Actual: false
"A" > "B"   
// Prediction: NaN
// Actual: false
"B" < "C"
// Prediction: false
// Actual: false
"a" > "A"
// Prediction: true
// Actual: true
"b" < "A"
// Prediction: false
// Actual: false
true === false 
// Prediction:false
// Actual:false
true != true
// Prediction: false
// Actual: false




// Exercise 2
let text = prompt("Type in numbers separated by a comma, to add the numbers: ")
let inputNumber1 = text.replace(/,/g, "+")
let result = eval(inputNumber1)
console.log(result)

// Exercise 3
let str = prompt("Type a text on Nemo: ")

if (str.search("Nemo") != -1) {
    console.log("I fount Nemo at " + str.indexOf("Nemo") )
} else {
    console.log("I cannot find Nemo")
}

// Exercise 4
let inputNumber = Number(prompt("Type in a number: "))
let letterO = "B"
if (inputNumber < 2) {
    console.log("boom")
} 
else if (inputNumber > 2) {
    if (inputNumber % 2 === 0) {
        console.log(letterO.padEnd(inputNumber+1,"o") + "m!")
    }
    else if (inputNumber % 5 === 0) {
        console.log(letterO.padEnd(inputNumber+1,"O") + "M")
    }
    else if (inputNumber % 5 === 0 && inputNumber % 2 === 0 ) {
        console.log(letterO.padEnd(inputNumber+1,"O") + "M!")
    }
    else {
        console.log(letterO.padEnd(inputNumber+1,"o") + "m!")
    }
} 



