// 1.Declare the fruits array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// 2.Print every element in the fruits array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 3.Modify the third fruit to "Durian"
fruits[2] = "Durian";
console.log(fruits);

// 4.Using push method to add two fruits into the array
fruits.push("Pineapple", "Watermelon");
console.log(fruits);

// 5.Remove the first fruit from the array
fruits.shift();
console.log(fruits);

// 6.Using a for loop to print the elements in the fruits array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 7.Using a while loop to print the elements in the fruits array
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// 8.Declare the numbers array and set each element to its squared value using map
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 9.Declare the numbers array and filter the prime numbers using filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = numbers.filter(num => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(primeNumbers);

// 10.Declare the numbers array and compute the sum of its elements using reduce
numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);