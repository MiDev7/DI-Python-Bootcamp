// Exercise 1
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "))

// Exercise 2
let str1 = "mix";
let str2 = "pod";
let mix1 = str1.replace(str1.substring(0,2),str2.substring(0,2))
let mix2 = str2.replace(str2.substring(0,2),str1.substring(0,2))
let mixWord = mix1 + " " + mix2
console.log(mixWord)

// Exercise 3
let num1 = Number(prompt("Input a first number: "))
let num2 = Number(prompt("Input a Second number: "))
alert (num1 + " + " + num2 + " = " + (num1+num2))
