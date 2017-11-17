const pizzas = require('./pizzas');

let toppingsList;
let popularToppings = {};
let popularCombos = {};

for (let i = 0; i < pizzas.length; i++) {
    //arrays of pizzas ordered

    toppingsList = pizzas[i].toppings;

    //loop through list and add or increment instances of topping to popularToppings object
    for (let j = 0; j < toppingsList.length; j++) {
        let currentTopping = toppingsList[j];
        if (popularToppings[currentTopping]) {
            popularToppings[currentTopping]++;
        } else {
            popularToppings[currentTopping] = 1;
        };
    };
    //add and increment topping combos to popularCombos object
    if (popularCombos[toppingsList]) {
        popularCombos[toppingsList]++;
    } else {
        popularCombos[toppingsList] = 1;
    };
};

// --------------------------SORT

// --------------------------Toppings

let popularT = []
for (let topping in popularToppings) {
    popularT.push([topping, popularToppings[topping]])
}

popularT.sort(function(a, b) {
    return b[1] - a[1];
});

console.log("\x1b[40m", "\x1b[37m", 'Most popular pizza toppings - ');
console.log("\x1b[40m", "\x1b[37m", " ");


for (let z = 0; z < 20; z++) {
    let topping = popularT[z];
    topping = topping.toString().split(',').join(', ')
    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1) + ". " + topping)
};
console.log("\x1b[40m", "\x1b[37m", " ");

//--------------------------Combos

combosSorted = Object.keys(popularCombos)


let popular = []
for (let topping in popularCombos) {
    popular.push([topping, popularCombos[topping]])
}

popular.sort(function(a, b) {
    return b[1] - a[1];
});

console.log("\x1b[40m", "\x1b[37m", "Most popular pizza combos - ");
console.log("\x1b[40m", "\x1b[37m", " ");


for (let z = 0; z < 20; z++) {
    let combo = popular[z];
    combo = combo.toString().split(',').join(', ')
    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1) + ". " + combo)
};
console.log(" ");
