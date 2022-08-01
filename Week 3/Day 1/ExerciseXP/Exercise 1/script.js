// Exercise 1
console.log(document.querySelector("#container"))  
const list = document.querySelector(".list")
const Content = Array.from(list.children)
const secondContent = Content[1]
secondContent.innerText="Richard"
const listContainer = Array.from(document.querySelectorAll(".list"))
const container1 = listContainer[0]
const container2 = listContainer[1]
container2.firstElementChild.innerText = "Mikaia"
container1.firstElementChild.innerText = "Mikaia"
const contentList2 =container2.children
container2.removeChild(contentList2[1])

// Exercise 2
