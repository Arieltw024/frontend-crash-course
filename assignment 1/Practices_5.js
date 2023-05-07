// 1. Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
const isEven = (num) => {
    return num % 2 === 0;
  };

// 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

// 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
const isPrime = (num) => {
    if(num <= 1) {
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  };

// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
const findMax = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
  };