// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge, conversionRate = 7) {
  return puppyAge * conversionRate + ' dog years';
}
calculateDogAge(8);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, moviesPerWeek) {
  return (100 - age) * 12 * 4 * moviesPerWeek;
}
calculateMoviesToWatch(99, 2);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(C) {
  return C + ' degree celsius is ' + ((9 / 5) * C + 32) + ' fahrenheit';
}
celsiusToFahrenheit(10);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(F) {
  return F + ' degree celsius is ' + ((F - 32) * 5) / 9 + ' celsius';
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  return n > 0 ? n ** x : `The number below 1 is not allowed`;
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n, operation) {
  let sumResult = 0;
  let productResult = 1;
  switch (operation) {
    case 'sum':
      for (let i = n; i > 0; i--) {
        sumResult += i;
      }
      return sumResult;
    case 'product':
      for (let i = n; i > 0; i--) {
        productResult *= i;
      }
      return productResult;
    default:
      alert('Not a valid input');
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
7. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfN(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    if (i % 5 === 0 || i % 7 === 0) {
      result += i;
    }
  }
  return result;
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(value) {
  return typeof value;
}
