// QUESTION 1

// Write a function called squareNumber that will take one argument (a number), square that number,
//  and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = number => {
  let result = Math.pow(number, 2);
  console.log(`The result of squaring the ${number} is ${result}`);
  return result;
};
console.log(squareNumber(3));

/* QUESTION 2
Write a function called halfNumber that will take one argument (a number), 
divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/

const halfNumber = number => {
  let halfValue = number / 2;
  console.log(`Half of ${number} is ${halfValue}.`);
  return halfValue;
};
console.log(halfNumber(5));

/* QUESTION 3
Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4." */
const percentOf = (num1, num2) => {
  let percentValue = (num1 / num2) * 100;
  console.log(`${num1} is ${percentValue}% of ${num2}.`);
  return percentValue;
};
console.log(percentOf(2, 4));

// QUESTION 4
/* Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that,
 and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." */

const areaOfCircle = radius => {
  let areaOfCircle = Math.PI * radius * radius;
  console.log(
    `The area for a circle with radius ${radius} is ${areaOfCircle}.`
  );

  return areaOfCircle.toFixed(2);
};
console.log(areaOfCircle(4));

// QUESTION 5
/* Write a function that will take one argument (a number) and perform the following operations,
 using the functions you wrote earlier:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3) */

const calculateApp = number => {
  let half = halfNumber(number);
  let square = squareNumber(half);
  let area = areaOfCircle(square);
  let result = percentOf(area, square);

  return result.toFixed(2);
};
console.log(calculateApp(2));
