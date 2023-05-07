// Declare some variable and log the result of variables arithmetic.
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Declare some variable and assign the result of variables arithmetic to another variable and log it.
let num3 = 20;
let num4 = 10;
let sum2 = num3 + num4;
let difference2 = num3 - num4;
let product2 = num3 * num4;
let quotient2 = num3 / num4;

let result1 = sum + difference;
let result2 = product - quotient;

console.log("Result 1:", result1);
console.log("Result 2:", result2);

// Declare some variable and log the result to variables comparison.
let num5 = 30;
let num6 = 15;
let num7 = 30;

console.log(num5 > num6); // true
console.log(num5 < num6); // false
console.log(num5 >= num7); // true
console.log(num6 <= num7); // true
console.log(num5 === num7); // true
console.log(num5 !== num6); // true

// Declare some variable and log the result of variables logical convertion.
let bool1 = true;
let bool2 = false;
let bool3 = true;

console.log(!bool1); // false
console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
console.log(bool2 || bool3); // true
console.log(bool1 && bool3); // true
console.log(bool2 && bool3); // false
