const pizzas = require('./pizzas');

let popularToppings = {};
let topTwentyToppings = [];
let popularCombos = {};
let topTwentyCombos = {};
let toppingsArray = [];
let toppingsList;

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

//sorts toppings by popularity
toppingsSorted = Object.keys(popularToppings).sort(function(a,b) {
    return popularToppings[b] - popularToppings[a]
});

console.log("\x1b[40m", "\x1b[37m", 'Most popular pizza toppings - ');
console.log("\x1b[40m", "\x1b[37m", " ");

//isolate top twenty toppings and log
for (let z = 0; z < 20; z++) {
    topTwentyToppings.push(toppingsSorted[z]);
    topTwentyToppings[z] === "alredo sauce" ? topTwentyToppings[z] = "alfredo sauce" : topTwentyToppings[z]
    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1)+". " + topTwentyToppings[z]);
};

//extra space for style :)
console.log("\x1b[40m", "\x1b[37m", " ");

//--------------------------COMBOS

//sorts combos by popularity - keys and values are separate to sort
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

//isolate top twenty combos and log
for (let z = 0; z < 20; z++) {
    let combo = combosSorted[z];
    let number = comboValuesSorted[z];
    topTwentyCombos[combo] = number
    combo = combo.length > 1 ? combo.split(',').join(', ') : combo

    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1) + ". " + combo +" was ordered "+ number+" times")
};

//extra space for style :)
console.log(" ");
