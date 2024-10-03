let gardenPlants = ["Tomato", "Oregano", "Basil", "Pepper", "Kale", "Arugula", "Spinach", "Chives"];

let first = (gardenPlants[0]);
let x = (gardenPlants.length)
let last = gardenPlants.pop();
let middle = (gardenPlants[x / 2]);
console.log(first, last, middle);
console.log(x);

gardenPlants.push("Cucumber");

gardenPlants[1] = "Rosemary";

let a = gardenPlants.shift();
console.log(a);



for (let i = 0; i < gardenPlants.length; i++) {
    console.log(gardenPlants[i]);
}


let [firstPlant, secondPlant, rest] = gardenPlants;
console.log(firstPlant);
console.log(secondPlant);
[firstPlant, secondPlant] = [secondPlant, firstPlant];
console.log(firstPlant);
console.log(secondPlant);