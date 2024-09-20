let crustOptions = ["deep dish", "hand tossed", "thin", "cheese stuffed", "pretzel"];
let sauceOptions = ["traditional", "marinara", "alfredo", "cheese sauce", "garlic butter"];
let cheeseOptions = ["mozzarella", "feta", "colby", "jack", "cheddar", "colby jack", "ricotta", "gouda", "gruyere", "havarti", "provalone", "gorgonzola"];
let toppingOptions = ["pepperoni", "sausage", "mushrooms", "onions", "black olives", "peppers", "ham", "pineapple", "spinach", "bacon"];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

function getCheeses(count) {
    let cheeses = [];
    for(let i = 0; i < count; i++) {
        cheeses.push(cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)]);
    }
    return cheeses;
}

function getToppings(count) {
    let toppings = [];
    for(let i = 0; i < count; i++) {
        toppings.push(toppingOptions[Math.floor(Math.random() * toppingOptions.length)]);
    }
    return toppings;
}


/* NOTE: the toppings and cheese functions do not check for duplicates, so someone may end up with 3 onion toppings or something */
function randomPizza() {
    let newPizza = {};
    let cheeseNum = Math.floor(Math.random() * 4 + 1);
    let toppingsNum = Math.floor(Math.random() * 4 + 1);

    newPizza.crustType = crustOptions[Math.floor(Math.random() * crustOptions.length)];
    newPizza.sauceType = sauceOptions[Math.floor(Math.random() * sauceOptions.length)];
    newPizza.cheeses = getCheeses(cheeseNum);
    newPizza.toppings = getToppings(toppingsNum);

    return newPizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
let pizza3 = pizzaOven("thin", "alfredo", ["mozzarella", "colby jack", "cheddar"],["pepperoni", "sausage", "peppers", "onions", "olives"]);
let pizza4 = pizzaOven("cheese stuffed", "cheese sauce", ["mozzarella", "feta", "cheddar"],["sausage", "onions", "peppers"]);
let pizza5 = randomPizza();
let pizza6 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizza5);
console.log(pizza6);