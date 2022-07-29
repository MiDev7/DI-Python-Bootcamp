// Exercise 1
function infoAboutMe() {
    console.log("My name is Mikaia. I am currently 18 years old. My hobbies are music and programming.")
}

infoAboutMe()

// Exercise 2
function infoAboutMe(personName, personAge, personFavoriteColor) {
    console.log("Your name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor )
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 3
function calculateTip(){
    let bill = Number(prompt("How much is the bill: "))
    if (bill < 50 ) {
        tip = bill * 0.2
    } else if (bill > 50 && bill < 200) {
        tip = bill * 0.15
    } else if (bill > 200) {
        tip = bill * 0.10
    }
    console.log("Here is the tip you paid: " +  tip + "Here is the final amount: " + (tip+bill))
}