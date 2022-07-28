// Exercise 1 Part 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people.splice(2,1,"Jason")
people.push("Mikaia")
console.log(people.indexOf("Mary"))
let new_people = people.slice(1,3)
let last = new_people[1]
console.log(last)
console.log(new_people.indexOf("Foo"))

// Exercise 1 Part 2
for (let i = 0; i<4; i++) {
    if (people[i] === "Jason"){
        break
    }
    else {
        console.log(people[i])
    }
}

// Exercise 2
let colors = ["yellow", "grey", "green", "orange", "blue"]
let suffix = ["1st", "2nd", "3rd", "4th", "5th"]
for (let x = 0 ; x < 5; x++) {
    console.log("My " + suffix[x] + " colour is " + colors[x])
}

// Exercise 3
let n = Number(prompt("Type a number: "))
while (n < 10) {
    n = Number(prompt("Type a number: "))
}

// Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor  +  building.numberOfAptByFloor.thirdFloor)

console.log(building.nameOfTenants[1] + " " + building.numberOfRoomsAndRent.dan[0] )

if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1] ) {
    building.numberOfRoomsAndRent.dan.splice(1,1,1200)
    console.log("Dan's new rent is " + building.numberOfRoomsAndRent.dan[1])
}

// Exercise 5
let family = {
    numberOfSibling : 0 ,
    familyName: "Jo" ,
    Address: "Mauritius" ,
    Saving : 1500 ,
}

for (n in family) {
    console.log("Key: " + n)
    console.log("Value: " + family[n])
}

// Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentence = " "
for (let i = 0; i<3 ; i++) {
    for (i in details) {
        let phrase = " " + i + " " + details[i]
        sentence = sentence + phrase 
    }
}
console.log(sentence)

// Exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
console.log(names)
secret_society = ""
for (let h = 0; h < 6; h++) {
    let name = names[h]
    secret_society = secret_society + name[0]
}
console.log(secret_society)