// Exercise 1
console.log(document.querySelector("h1"))
const article = document.querySelector("article")
const lastChild = article.lastElementChild
article.removeChild(lastChild)

const secondHeading = document.querySelector("h2")
secondHeading.addEventListener("click", changeBackground)
function changeBackground(e) {
    e.target.style.backgroundColor = "red"
}

const thirdHeading = document.querySelector("h3")
thirdHeading.addEventListener("click", displayHidden)
function displayHidden(e) {
    e.target.style.display = "none"
}

const button =  document.querySelector("#btn")
const allParagraphs = Array.from(document.querySelectorAll("p"))
button.addEventListener("click", mkBold)
function mkBold(e){
    allParagraphs[0].style.fontWeight = "600"
    allParagraphs[1].style.fontWeight = "600"
    allParagraphs[2].style.fontWeight = "600"
} 

const h1 = document.querySelector("h1")
h1.addEventListener("mouseover", changeSize)
function changeSize(e){
    let radomNumber = Math.floor(Math.random() * 101);
    e.target.style.fontSize = radomNumber + "px"
}

// Exercise 2
const form = document.forms
console.log(form)
let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let submit = document.querySelector("#submit")
console.log(fname)
console.log(lname)
console.log(submit)
console.log(form.elements.fname)
console.log(form.elements.lname)