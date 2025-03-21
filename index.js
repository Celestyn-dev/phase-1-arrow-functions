// Function Expression for divide
const divide = function() {
    return 2000 / 100;
};

// Arrow Function for square
const square = x => x * x;

// Arrow Function for add
const add = (a, b) => a + b;

// Using Arrow Functions in Array Iterators
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example of using arrow functions in .map() for an array of objects
const students = [
    { name: "Celestine", score: 85 },
    { name: "Eunice", score: 92 },
    { name: "Enoch", score: 88 }
];

const studentNames = students.map(student => student.name);

console.log(studentNames); // Output: ["Celestine", "Eunice", "Enoch"]

// Example using arrow function in .filter()
const highScorers = students.filter(student => student.score > 90);
console.log(highScorers); // Output: [{ name: "Eunice", score: 92 }]

// Example using arrow function in .reduce()
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
console.log(totalScore); // Output: 265

// Example using arrow function in .forEach()
students.forEach(student => console.log(`${student.name} scored ${student.score}`));

