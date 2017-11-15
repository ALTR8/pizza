const pizzas = require('./pizzas');

let toppingsArray = [];
let popularToppings = {};
let topTwentyToppings = [];
let toppingsList;
let popularCombos = {};
let topTwentyCombos = {};

for (let i = 0; i < pizzas.length; i++) {
    toppingsList = pizzas[i].toppings;
    toppingsArray.push(toppingsList);

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

//--------------------------SORT

//--------------------------Toppings

let toppingsSort = Object.keys(popularToppings)

console.log("\x1b[40m", "\x1b[37m", 'Most popular pizza toppings - ');
console.log("\x1b[40m", "\x1b[37m", " ");


for (let z = 0; z < 20; z++) {
    topTwentyToppings.push(toppingsSort[z]);
    topTwentyToppings[z] === "alredo sauce" ? topTwentyToppings[z] = "alfredo sauce" : topTwentyToppings[z]
    console.log("\x1b[40m", "\x1b[37m", "🍕    " + (z+1)+". " + topTwentyToppings[z]);
};
console.log("\x1b[40m", "\x1b[37m", " ");

//--------------------------Combos

combosSorted = Object.keys(popularCombos)

comboValuesIsolated = Object.keys(popularCombos).map(function(key) {
    return popularCombos[key];
});

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i],
        j = i;
        while (arr[j - 1] < tmp) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = tmp;
    }
    return arr;
};

comboValuesSorted = insertSort(comboValuesIsolated);

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
