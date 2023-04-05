let username = prompt("Enter your name")
let userAge = prompt("Enter your age")
let favFruit = prompt("Enter your favourite fruit")
let favFilm = prompt("Enter your favourite film")
let favGame = prompt("Enter your favourite game")

let object = {
    name: username,
    age: userAge,
    fruit: favFruit,
    film: favFilm,
    game: favGame,
}

for(inf in object) {
    console.log(object[inf])
}