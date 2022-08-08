let allBooks = [
    {
        title: "Ikigai:The Japanese Secret to a Long adn Happy Life",
        author: "Héctor García and Francesc Miralles",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SX351_BO1,204,203,200_.jpg", 
        alreadyRead : true,
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        imgUrl: "https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg" ,
        alreadyRead :false,
    }
]

// for (let x in allBooks[1]) {
//     console.log(x) 
// }
const container = document.querySelector("div")
const table = document.createElement("table")
container.appendChild(table)
const rowHeader = document.createElement("tr")
table.appendChild(rowHeader)
// for (let i = 0; i < 5 ; i++) {
//     var tableTitle = document.createElement("th")
//     rowHeader.appendChild(tableTitle)
//     tableTitle.textContent = 
// }
var tableTitle1 = document.createElement("th")
rowHeader.appendChild(tableTitle1)
tableTitle1.textContent = "Title"
var tableTitle2 = document.createElement("th")
rowHeader.appendChild(tableTitle2)
tableTitle2.textContent = "Author(s)"
var tableTitle3 = document.createElement("th")
rowHeader.appendChild(tableTitle3)
tableTitle3.textContent = "Image"

for (let i = 0; i < 2; i++) {
    var newRow = document.createElement("tr")
    table.appendChild(newRow)
    let arrayContent =  allBooks[i]
    for (x in arrayContent) {
        let content = document.createElement("td")
        if (x = "ImgUrl") {
            let image = document.createElement("img")
            image.setAttribute("src", arrayContent[x])
            content.appendChild(image)
        }
        content.textContent= arrayContent[x]
        newRow.appendChild(content)
    }

    if (arrayContent.alreadyRead == true) {
        newRow.style.color = "red"
    }
    else if (arrayContent.alreadyRead == false) {
        newRow.style.color = "green"
    }
}