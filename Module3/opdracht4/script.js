// function broodjeAap(beleg) {
//     Ham;
//     kaas;
//     sla;
// }

// function broodjeAap(beleg) {
//     console.log('add sla');
//     console.log('add kaas');
//     console.log('add ham');
// }

// broodjeAap('beleg');


function makeSandwich(topping) {
    console.log('There you go a sandwich with', topping); // declareert
}

makeSandwich('ham'); // call

function calculateDiscountPrice(totalAmount, discount) {
    return totalAmount - discount;
}

console.log(Math.round(calculateDiscountPrice(200, 21)));

function calculateDiscountedPrice(totalAmount, discount) {
    if (totalAmount >= 25) {
        return (totalAmount - discount);
    } else {
        return totalAmount;
    }

    console.log(Math.round(calculateDiscountedPrice(200, 21)));