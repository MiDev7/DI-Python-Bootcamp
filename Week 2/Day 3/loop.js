// Exercise 1
// for (let i = 0; i < 16; i++ ){
//     if ((i % 2) == 0) {
//         console.log ( i + " is an even number")
//     }
//     else {
//         console.log ( i + " is an odd number")
//     }
// }

// Exercise 2
let names= ["john", "sarah", 23, "Rudolf",34];
for (let i = 0; i < 5; i++) {
    let name = names[i]
    if (typeof name !== "string"){
        continue
    } 
    else if (typeof name == "string"){
        if (name[0].toUpperCase() !== name[0]){
            let new_name = name[0].toUpperCase()+ name.slice(1)
            console.log(new_name)
        }
    }
}

for (let x = 0; x < 6; x++) {
    let str = names[x] 
    if (typeof str !== 'string'){
        break;
    }
    else    {
        console.log(str);
    }
}
