export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

function addPercent(price) {
    return price+(price/100)
}
// You are allowed to change this function
function convertToUSD(price) {
    return Math.round(price * 100 * 1.4) / 100
}
// You are allowed to change this function
function convertToBRL(price) {
    return Math.round(price * 100 * 5.9) / 100
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD( addPercent(price) );
const priceInBRL = convertToBRL( addPercent(price) );

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/