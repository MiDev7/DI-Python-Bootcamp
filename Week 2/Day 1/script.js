// Exercise 1
let addressNumber = "33"
let addressStreet = "Avenue des Colombes"
let country =  "Mauritius"
let globalAddress = "I live in " + addressNumber + " "+ addressStreet + ", " + country
console.log (globalAddress)
console.log("Hello World")

// Exercise 2
let birthDay = 2004
let futurYear = 2042
let futurAge = futurYear - birthDay
console.log ("I will be " + futurAge + " in " + futurYear)

// Exercise 3
let pets = ["Cats","Dogs","Monkeys","Rabbits","Cows","Fish"]
console.log(pets[1])
pets.splice(4 ,1 ,"Horses")
console.log(pets.length)