// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Declaration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue

// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}
// - Write a Function Expression
let addOne = function (n) {
  return n + 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n + 1;
};

// - Execute the function
addOne(9);

// - Execute the function and store the return value in a variable.
let returnValue = addOne(9);

// - What is the typeof returnValue
//typeof return value is 'number'

/* 2. Subtract one

Write a function named `subtractOne` that accepts a number, subtracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(n) {
  return n - 1;
}

// - Write a Function Expression
let subtractOne = function (n) {
  return n - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets
let subtractOne = (n) => {
  return n - 1;
};

// - Execute the function
subtractOne(9);

// - Execute the function and store the return value in a variable.
let returnValue = subtractOne(8);

// - What is the typeof returnValue
//typeof returnValue is 'number'

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2) {
  return num1 + num2;
}

// - Write a Function Expression
let sum = function (num1, num2) {
  return num1 + num2;
};

// - Write an Arrow Function without curly brackets(if possible)
let sum = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets
let sum = (num1, num2) => {
  return num1 + num2;
};

// - Execute the function
sum(9, 8);

// - Execute the function and store the return value in a variable
let returnValue = sum(9, 8);

// - What is the typeof returnValue
//typeof returnValue is 'number'

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
  return n * n;
}

// - Write a Function Expression
let square = function (n) {
  return n * n;
};

// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n * n;

// - Write an Arrow Function with curly brackets
let square = (n) => {
  return n * n;
};

// - Execute the function
square(8);

// - Execute the function and store the return value in a variable
let returnValue = square(9);

// - What is the typeof returnValue
//typeof return value is 'number';

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreator(x, y) {
  return x > y;
}

// - Write a Function Expression
let isGreator = function (x, y) {
  return x > y;
};

// - Write an Arrow Function without curly brackets(if possible)
let isGreator = (x, y) => x > y;

// - Write an Arrow Function with curly brackets
let isGreator = (x, y) => {
  return x > y;
};

// - Execute the function
isGreator(9, 7);

// - Execute the function and store the return value in a variable
let returnValue = isGreator(9, 5);

// - What is the typeof returnValue
//typeof return value is 'boolean'

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n) {
  return n % 2 === 0 ? 'Number is even' : 'Number is odd';
}

// - Write an anonymous Function Expression
let oddOrEven = function (n) {
  return n % 2 === 0 ? 'Number is even' : 'Number is odd';
};

// - Write an named Function Expression
let oddOrEven = function oddOrEven(n) {
  return n % 2 === 0 ? 'Number is even' : 'Number is odd';
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => (n % 2 === 0 ? 'Number is even' : 'Number is odd');

// - Write an Arrow Function with curly brackets
let oddOrEven = (n) => {
  return n % 2 === 0 ? 'Number is even' : 'Number is odd';
};

// - Execute the function
oddOrEven(9);

// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(9);

// - What is the typeof returnValue
//type of returnValue is 'string'
