function calculatePizzas(humans,pizzaPerPerson){

    const slicesPerPizza = 8
    let pizzaSlices = humans * pizzaPerPerson
    pizzaSlices /= slicesPerPizza
    return Math.ceil(pizzaSlices)
}

let pizzaFinal = calculatePizzas(21,3)
console.log(calculatePizzas(15,3 