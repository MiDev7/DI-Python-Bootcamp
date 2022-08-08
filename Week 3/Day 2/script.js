let count = 2
function insertRow() {
    count = count + 1
    const table = document.querySelector("#sampleTable")
    const newRow = document.createElement("tr")
    for (let i = 1; i < 3; i++){
        let newColumn = document.createElement("td")
        newColumn.textContent = "Row"+ count + " cell" + i
        newRow.appendChild(newColumn)
    }
    table.appendChild(newRow)
}

let button =  document.querySelector("#jsstyle")
button.addEventListener("mouseover" , ResponseMouseOver);
button.addEventListener("mouseout", ResponseMouseOut);
function ResponseMouseOver(e){
    e.target.style.backgroundColor = "yellow"
    e.target.style.border = "none"
    e.target.style.borderRadius = "7px"
    e.target.style.padding = "5px 10px"
    e.target.style.fontSize = "20px"
    
}

function ResponseMouseOut(e){
    e.target.style.backgroundColor = "White"
    e.target.style.border = "2px solid yellow"
    e.target.style.padding = "5px 10px"
    e.target.style.fontWeight = "600"
}

let select = document.querySelector("#select1")
let newOption = document.createElement("option")
newOption.setAttribute("value","work")
newOption.innerText = "Work"
select.appendChild(newOption)

let newOption1 = document.createElement("option")
newOption1.setAttribute("value", "Primary School")
newOption1.innerText = "Primary School"
select.prepend(newOption1)

select.value = "banana";