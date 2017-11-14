const pizzas = require('./pizzas');

let popularToppings = {};
let topTwentyToppings = [];
let popularCombos = {};
let topTwentyCombos = {};

for (let i = 0; i < pizzas.length; i++) {
    //toppingsList = an array of each separate order
    let toppingsList = pizzas[i].toppings;
    //isolates each topping
    for (let j = 0; j < toppingsList.length; j++) {
        let currentTopping = toppingsList[j];
        if (popularToppings[currentTopping]) {
            popularToppings[currentTopping]++;
        } else {
            popularToppings[currentTopping] = 1;
        };
    };
};

//sorts toppings by popularity
toppingsSorted = Object.keys(popularToppings).sort(function(a,b) {
    return popularToppings[b] - popularToppings[a]
});
console.log("\x1b[41m", "\x1b[37m", 'Most popular pizza toppings - ');
console.log("\x1b[41m", "\x1b[37m", " ");
//isolate top twenty toppings and log
for (let z = 0; z < 19; z++) {
    topTwentyToppings.push(toppingsSorted[z]);
    console.log("\x1b[41m", "\x1b[37m", "🍕    " + (z+1)+". " + topTwentyToppings[z]);
};
console.log("\x1b[41m", "\x1b[37m", " ");

//-------------------------------------------------------------

for (let i = 0; i < pizzas.length; i++) {
    //toppingsList = an array of each separate order
    let toppingsList = pizzas[i].toppings;
    if (popularCombos[toppingsList]) {
        popularCombos[toppingsList]++;
    } else {
        popularCombos[toppingsList] = 1;
    }
};

//sorts combos by popularity
combosSorted = Object.keys(popularCombos).sort(function(a,b) {
    return popularCombos[b] - popularCombos[a]
});

comboValuesIsolated = Object.keys(popularCombos).map(function(key) {
    return popularCombos[key];
});
comboValuesSorted = comboValuesIsolated.sort(function(a,b) {
    return b-a
});

console.log("\x1b[41m", "\x1b[37m", "Most popular pizza combos - ");
console.log("\x1b[41m", "\x1b[37m", " ");
//isolate top twenty combos and log
for (let z = 0; z < 19; z++) {
    let combo = combosSorted[z];
    let number = comboValuesSorted[z];
    topTwentyCombos[combo] = number
    combo = combo.length > 1 ? combo.split(',').join(', ') : combo

    console.log("\x1b[41m", "\x1b[37m", "🍕    " + (z+1) + ". " + combo +" was ordered "+ number+" times")
};
console.log(" ");
