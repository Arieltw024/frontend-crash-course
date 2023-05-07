// 1. Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’
// if age < 18
let age = 20;
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Can't vote");
}

// 2. Check if a number is odd or even.
let num = 5;
if (num % 2 === 0) {
  console.log("odd");
} else {
  console.log("even");
}

// 3. Declare two variables and check which one is big or they’re equaled.
let num1 = 10;
let num2 = 5;
if (num1 > num2) {
  console.log("num1's bigger");
} else if (num1 === num2) {
  console.log("two numbers are equal");
} else {
  console.log("num2's bigger");
}

// 4. Declare three variables and check which one is big or they’re equaled.
let num3 = 10;
let num4 = 20;
let num5 = 30;
if (num3 > num4 && num3 > num5) {
  console.log("num3 is max");
} else if (num4 > num3 && num4 > num5) {
  console.log("num4 is max");
} else if (num5 > num3 && num5 > num4) {
  console.log("num5 is max");
} else {
  console.log("three numbers are equal");
}

// 5. Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
let start = 10;
let end = 100;
let num6 = 50;
if (num6 >= start && num6 <= end) {
  console.log(`${num6}within the scope`);
} else {
  console.log(`${num6}not in range`);
}

// 6. Declare a variable called year and check the year is leap year or not.
let year = 2034;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}