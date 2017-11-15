const pizzas = require('./pizzas');

let toppingsArray = [];
let popularToppings = {};
let topTwentyToppings = [];
let toppingsList;
let popularCombos = {};
let topTwentyCombos = {};

for (let i = 0; i < pizzas.length; i++) {
    toppingsArray.push(pizzas[i].toppings);
    toppingsList = pizzas[i].toppings;

    for (let j = 0; j < toppingsList.length; j++) {
        let currentTopping = toppingsList[j];
        if (popularToppings[currentTopping]) {
            popularToppings[currentTopping]++;
        } else {
            popularToppings[currentTopping] = 1;
        };
    };

    if (popularCombos[toppingsList]) {
        popularCombos[toppingsList]++;
    } else {
        popularCombos[toppingsList] = 1;
    };
};

//--------------------------SORTING - this needs to be better

toppingsSorted = Object.keys(popularToppings).sort(function(a,b) {
    return popularToppings[b] - popularToppings[a]
});

console.log("\x1b[40m", "\x1b[37m", 'Most popular pizza toppings - ');
console.log("\x1b[40m", "\x1b[37m", " ");


for (let z = 0; z < 20; z++) {
    topTwentyToppings.push(toppingsSorted[z]);
    topTwentyToppings[z] === "alredo sauce" ? topTwentyToppings[z] = "alfredo sauce" : topTwentyToppings[z]
    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1)+". " + topTwentyToppings[z]);
};
console.log("\x1b[40m", "\x1b[37m", " ");

combosSorted = Object.keys(popularCombos).sort(function(a,b) {
    return popularCombos[b] - popularCombos[a]
});

comboValuesIsolated = Object.keys(popularCombos).map(function(key) {
    return popularCombos[key];
});
comboValuesSorted = comboValuesIsolated.sort(function(a,b) {
    return b-a
});

console.log("\x1b[40m", "\x1b[37m", "Most popular pizza combos - ");
console.log("\x1b[40m", "\x1b[37m", " ");


for (let z = 0; z < 20; z++) {
    let combo = combosSorted[z];
    let number = comboValuesSorted[z];
    topTwentyCombos[combo] = number
    combo = combo.length > 1 ? combo.split(',').join(', ') : combo

    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1) + ". " + combo +" was ordered "+ number+" times")
};
console.log(" ");
