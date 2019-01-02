const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map((pizza, index) => index + ': ' + pizza.name.toUpperCase());

console.log(mappedPizzas);
