/**
 * @name app.js
 * @author Karlina Ray Beringer
 * @date 16_NOVEMBER_2017
 * @description Example JavaScript code.
 */

// Print a random number from 0 - 10 to the console.
// Math.random() returns a number in [0, 1).
// (i.e. a number between 0 (inclusive) and 1 (exclusive).
var randomNumber = Math.round(Math.random() * 10);
console.log(`Random Number from 0 (inclusive) to 10 (inclusive): ${randomNumber}`);

/**
 * Find out how many hours have passed since 1_JANUARY_2000.
 * Print the result to the console. Round the result.
 */

// Declare the variables for this exercise.
var date2000 = new Date(2000, 1, 1),
	currentDate = new Date(),
	milliseconds, seconds, minutes, hours;

// Compute time conversions.
milliseconds = currentDate.getTime() - date2000.getTime();
seconds = milliseconds/1000;
minutes = seconds/60;
hours = minutes/60;

// Print the number of hours passed to the console.
console.log(Math.floor(hours));
