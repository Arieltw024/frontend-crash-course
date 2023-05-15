// 1.Create an object called person with properties for name, age, and gender
let person = {
  name: "John",
  age: 25,
  gender: "Male",
};

// 2.Display the name and age of the person
console.log("Name:", person.name);
console.log("Age:", person.age);

// 3. Add a method called greet to the person object
person.greet = function() {
  console.log("Hello");
};

// 4.Invoke the greet method to see the greeting message
person.greet();

// 5.Add a property called friends to the person object
person.friends = ["Alice", "Bob", "Charlie"];

// 6.Print the friends property
console.log("Friends:", person.friends);