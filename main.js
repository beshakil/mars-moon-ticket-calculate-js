const marsCost = 5000;
const moonCost = 3000;

function handleQuantity(planet, operator) {

    // This function for input field er value increment and decrement.

    //Take quantity Input Dynamically
    const quantityInput = document.getElementById(planet + "-quantity").value;
    //convert to Number
    let quantity = parseInt(quantityInput);
    //Increment quantity

    if (operator == 'plus') {
        quantity = quantity + 1;
    }
    else {
        quantity = quantity - 1;
        if (quantity < 0) {
            return;
        }
    }
    //update input 
    document.getElementById(planet + "-quantity").value = quantity;
    calculateJourney(planet);
    updateTotal();
}

function calculateJourney(planet) {
    const quantityInput = document.getElementById(planet + "-quantity").value;
    let quantity = parseInt(quantityInput);

    if (planet === 'mars') {
        let marsTotal = quantity * marsCost;
        updateUi(planet, marsTotal);
    }
    else {
        let moonTotal = quantity * moonCost;
        updateUi(planet, moonTotal);
    }
}

function updateUi(planet, total) {
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;
}

function updateTotal() {
    const marsQuantityInput = document.getElementById("mars-quantity").value;
    const moonQuantityInput = document.getElementById("moon-quantity").value;

    let marsQuantity = parseInt(marsQuantityInput);
    let moonQuantity = parseInt(moonQuantityInput);

    let total = (marsQuantity * marsCost) + (moonQuantity * moonCost);

    document.getElementById('total').innerText = total;

}