// Exercise 1
let favouriteFood = "Alfredo Pasta"
let favouriteMeal = "dinner"
console.log("I eat " + favouriteFood + " at every " + favouriteMeal)

//Exercise 2
// Part 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.join()
console.log("I watched 3 series: " + myWatchedSeriesLength)
// Part 2
myWatchedSeries.splice(2, 1, "friends")
myWatchedSeries.push("Flash")
myWatchedSeries.splice(0, 1, "Wanda Vision")
let str = myWatchedSeries[1]
console.log("This is the 3rd letter of money heist: " + str.substring(2,3))
console.log(myWatchedSeries)

// Exercise 3
let celsius = 16
let fahrenheit = ((celsius / 5)*9) + 32
console.log(celsius + "°C is " + fahrenheit + "°F")

// Exercise 4
let c;
let a = 34;
let b = 21;
console.log(a+b) 
// Prediction: It will output 55, because 34 and 21 are integer
// Actual: 55
a = 2;
console.log(a+b) 
// Prediction: It will output 23, because the value was changed to 2
// Actual: 23
console.log(3 + 4 + '5');
// Prediction: It will output 75, because 3 and 4 are integer and they will give a value of 7 , the string having the value 5 will then be place after 7
// Actual: 75


// Exercise 5
typeof(15)
// Prediction:number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: false
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburberg
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: number
// Actual: NaN

99 * "hello"
// Prediction: 99hello
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false




// Exercise 6
5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: NaN
// Actual: NaN

10 % 5
// Prediction: 1
// Actual:0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual:

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: 0
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
