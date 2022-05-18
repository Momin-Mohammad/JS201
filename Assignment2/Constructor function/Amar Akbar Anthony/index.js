let Amar = {
    name : "Amar",
    skill : "Singing",
    place : "Goa",
}

let Akbar = {
    name : "Akbar",
    skill : "Chef",
    place : "Mumbai",
}

let Anthony = {
    name : "Anthony",
    skill : "Magician",
    place : "Kashmir",
}

function skills(skill) {
let div = document.querySelector("#friends");
let skill_borrow = `<----${this.name} is a ${skill},lives in ${this.place}---->`;
div.append(skill_borrow);

console.log(skill_borrow);
}

skills.call(Amar, "Chef");
skills.call(Akbar, "Magician");
skills.call(Anthony, "Singer")