// 1. Show 1 to 10000
for(let i = 1; i <= 10000; i++) {
    console.log(i);
  }  

// 2. Show 1 to 100 even numbers
for(let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  

// 3. Show 1 to 100 odd numbers
for(let i = 1; i <= 100; i += 2) {
    console.log(i);
  }

// 4. Show 1 to 100 prime numbers
function isPrime(num) {
    if(num <= 1) {
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for(let i = 1; i <= 100; i++) {
    if(isPrime(i)) {
      console.log(i);
    }
  }

// 5. Declare a variable called size and show the height of size triangle 
let size = 5;
for(let i = 1; i <= size; i++) {
  let row = "";
  for(let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 6. Show Multiplication Table (from 1*1 to 9*9)
for(let i = 1; i <= 9; i++) {
    let row = "";
    for(let j = 1; j <= 9; j++) {
      row += i + "*" + j + "=" + i*j + " ";
    }
    console.log(row);
  }
  
