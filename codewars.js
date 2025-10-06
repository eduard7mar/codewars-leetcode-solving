// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// Solution
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

// Solution
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 1.	"I love you"
// 2.	"a little"
// 3.	"a lot"
// 4.	"passionately"
// 5.	"madly"
// 6.	"not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// Solution
function howMuchILoveYou(nbPetals) {
  let phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  const index = (nbPetals - 1) % phrases.length;
  return phrases[index];
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

// Solution
function monkeyCount(n) {
  let array = [];
  let i = 0;
  while (i < n) {
    i++;
    array.push(i);
  }
  return array;
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!

// Solution
function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// Solution
function powersOfTwo(n) {
  let array = [];
  let i = 0;
  while (i <= n) {
    array.push(Math.pow(2, i));
    i++;
  }
  return array;
}

// This is a question from codingbat
// Given an integer n greater than or equal to 0, create and return an array with the following pattern:
// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

// Solution
function squareUp(n) {
  let res = [];
  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--) res.push(j <= i ? j : 0);
  return res;
}

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Solution
function stringToArray(string) {
  return string.split(" ");
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// •	If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// •	If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// Solution
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Solution
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

// Solution
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}

// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Solution
var countSheep = function (num) {
  if (num === 0) {
    return "";
  }
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(`${i} sheep...`);
  }
  return result.join("");
};

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution
function XO(str) {
  let array = str.toLowerCase().split("");
  let x = 0;
  let y = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("x")) {
      x++;
    }
    if (array[i].includes("o")) {
      y++;
    }
  }
  return x === y ? true : false;
}

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// Solution
function findMultiples(integer, limit) {
  let result = [];
  for (let i = 1; i * integer <= limit; i++) {
    result.push(i * integer);
  }
  return result;
}

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// Solution
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b, 0);
}

// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// •	if x > y: 3 points (win)
// •	if x < y: 0 points (loss)
// •	if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// •	our team always plays 10 matches in the championship
// •	0 <= x <= 4
// •	0 <= y <= 4

// Solution
function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Solution
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// Solution
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// Solution
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// Solution
function rentalCarCost(d) {
  return d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : 40 * d;
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Solution
function removeExclamationMarks(s) {
  return s.replace(/\!/g, "");
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12

// Solution
const quarterOf = (month) => {
  return month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1;
};

// const quarterOf = m => Math.ceil(m/3);

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// Solution
function openOrSenior(data) {
  return data.map((item) => (item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"));
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// Solution
function bonusTime(salary, bonus) {
  return bonus === true
    ? "\u00A3" + (salary * 10).toString()
    : "\u00A3" + salary.toString();
}

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// Solution
function enough(cap, on, wait) {
  return cap - on > wait ? 0 : -(cap - on - wait);
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// Solution
function divisors(integer) {
  const divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length > 0 ? divisors : `${integer} is prime`;
}

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// Solution
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let number = start; number <= end; number++) {
    if (!number.toString().includes("5")) {
      count++;
    }
  }
  return count;
}

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

// Your function takes two arguments:
// 1.	current father's age (years)
// 2.	current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// Solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// •	You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// •	You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

// Solution
function checkForFactor(base, factor) {
  return base % factor === 0;
}

// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"

// Solution
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }
  return name;
}

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); returns 1
// str_count("Hello", 'l'); returns 2
// str_count("", 'z'); returns 0

// Solution
function strCount(str, letter) {
  let number = 0;
  str.split("").map((item) => (item === letter ? number++ : number));
  return number;
}

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Solution
function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution
function stray(numbers) {
  let arr = numbers.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.
// Solution
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Number out of range";
  }
}

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Solution
var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears, dogYears;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + 4 * (humanYears - 2);
    dogYears = 24 + 5 * (humanYears - 2);
  }

  return [humanYears, catYears, dogYears];
};

// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
// Solution
function isPalindrome(x) {
  // Convert the string to lowercase to make the comparison case-insensitive
  x = x.toLowerCase();
  // Remove non-alphanumeric characters from the string using a regular expression
  x = x.replace(/[^a-z0-9]/g, "");
  // Compare the string with its reverse
  return x === x.split("").reverse().join("");
}

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
// Solution
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
// Solution
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  // Loop until the principal reaches the desired amount
  while (principal < desired) {
    // Calculate interest earned for the year
    const interestEarned = principal * interest;
    // Deduct tax from the interest earned
    const taxPaid = interestEarned * tax;
    // Add interest earned (after tax) to the principal
    principal += interestEarned - taxPaid;
    // Increment the number of years
    years++;
  }
  return years;
}

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// Solutions
function multiply(number) {
  let numbLen = number.toString().replace(/\W/, "").length;
  return number * Math.pow(5, numbLen);
}

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"

// Solutions
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map(function (char) {
      if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else if (char >= "A" && char <= "Z") {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
};

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Solution
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// Solutions
function digitalRoot(n) {
  let result = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  if (result.toString().length > 1) {
    return digitalRoot(result);
  } else {
    return result;
  }
}

function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// Solution
function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).
// Examples:
// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false
// Solution
function canFormTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  return a + b > c && a + c > b && b + c > a;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.
// Solution
function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
// Solution
function findOutlier(integers) {
  const evenNumbers = integers.filter((item) => item % 2 === 0);
  const oddNumbers = integers.filter((item) => item % 2 !== 0);
  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
// Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
// Solution
function gimme(triplet) {
  let number = triplet.slice().sort((a, b) => a - b)[1];
  console.log(number);
  return triplet.indexOf(number);
}

function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!
// Solution
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
// Solution
function roundToNext5(n) {
  // If n is negative and not a multiple of 5, round up towards 0
  if (n < 0 && n % 5 !== 0) {
    return n - (n % 5);
  }
  // Otherwise, round up to the next multiple of 5
  return Math.ceil(n / 5) * 5;
}

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// Solution
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let array = [];
  for (let i = begin; i <= end; i += step) {
    array.push(i);
  }
  return array.reduce((a, b) => a + b);
};

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
// Solution
function solution(nums) {
  return nums === null || nums.length === 0 ? [] : nums.sort((a, b) => a - b);
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// Solution
function removeUrlAnchor(url) {
  return url.split("#")[0];
}

function removeUrlAnchor(url) {
  return url.replace(/#.*/gi, "");
}

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
// Solution
var isAnagram = function (test, original) {
  let word1 = test.toLowerCase().split("").sort().join("");
  let word2 = original.toLowerCase().split("").sort().join("");
  return word1 === word2;
};

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
// Solution
var capitals = function (word) {
  return word
    .split("")
    .map((char, index) =>
      char === char.toUpperCase() && char !== char.toLowerCase()
        ? index
        : undefined
    )
    .filter((index) => index !== undefined);
};

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
// Solution
function smallEnough(a, limit) {
  return a.filter((item) => item > limit).length > 0 ? false : true;
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
// Solution
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// For example (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]
// Solution
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).splice(-2);
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// Solution
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
// Solution
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
  else if (fighter1.health <= 0) return fighter2.name;
  else return fighter1.name;
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// Solution
function solve(s) {
  let uppercase = 0;
  let lowecase = 0;
  s.split("").forEach((item) =>
    item === item.toUpperCase() ? uppercase++ : lowecase++
  );
  return uppercase > lowecase ? s.toUpperCase() : s.toLowerCase();
}

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!
// Solution
function capitalize(s) {
  let even = s
    .split("")
    .map((item, i) => (i % 2 === 0 ? item.toUpperCase() : item.toLowerCase()))
    .join("");
  let odd = s
    .split("")
    .map((item, i) => (i % 2 !== 0 ? item.toUpperCase() : item.toLowerCase()))
    .join("");
  return [even, odd];
}

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Solution
function sumOfMinimums(arr) {
  return arr.map((item) => Math.min(...item)).reduce((a, b) => a + b);
}

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
// Solution
function sumStr(a, b) {
  return (+a + +b).toString();
}

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
// More details about factorial can be found here.
// Solution
function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The value should be in the range of 0 to 12.");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.
// If, there are no JavaScript developers from Europe then your function should return 0.
// Solution
function countDevelopers(list) {
  let newArray = list.filter(
    (item) => item.continent === "Europe" && item.language === "JavaScript"
  );
  return newArray.length > 0 ? newArray.length : 0;
}

// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice as strong as love :-)
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
// The input will always be made of only lowercase letters and will never be empty.
// Solution
function wordsToMarks(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i) - 96);
  }
  return array.reduce((a, b) => a + b);
}

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
// Solution
function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  let leftScore = 0,
    rightScore = 0;

  for (let char of fight) {
    if (leftSide[char]) {
      leftScore += leftSide[char];
    } else if (rightSide[char]) {
      rightScore += rightSide[char];
    }
  }

  if (leftScore > rightScore) {
    return "Left side wins!";
  } else if (rightScore > leftScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
// Solution
function evenNumbers(array, number) {
  return array.filter((item) => item % 2 === 0).splice(-number);
}

// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
// Solution
function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      descending = false;
    } else if (array[i] < array[i - 1]) {
      ascending = false;
    }
  }
  if (ascending) {
    return "yes, ascending";
  } else if (descending) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.
// Solution
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return Math.floor(
    Math.sqrt(arr.map((a) => a * a).reduce((b, c) => b + c)) / 2
  );
}

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
// Solution
function bump(x) {
  return x.split("").filter((item) => item === "n").length <= 15
    ? "Woohoo!"
    : "Car Dead";
}

// Given an array of integers, Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Solution
function adjacentElementsProduct(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArray);
}

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
// Solution
var greet = function (name) {
  return `Hello ${
    name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
  }!`;
};

// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]
// Solution
function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// Solution
function vowelIndices(word) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let result = [];
  let string = word.toLowerCase().split("");
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        result.push(i + 1);
      }
    }
  }
  return result;
}

function vowelIndices(word) {
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    if (/[aeioyu]/i.test(word[i])) {
      arr.push(i + 1);
    }
  }
  return arr;
}

// This program tests the life of an evaporator containing a gas.
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Example:
// evaporator(10, 10, 5) -> 29
// Solution
function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let criticalLevel = content * (threshold / 100);
  while (content > criticalLevel) {
    content -= content * (evap_per_day / 100);
    days++;
  }
  return days;
}

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
// Assume that the input n will always be a positive integer.
// Examples: (Input --> output)
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
// Solution
function sumCubes(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(Math.pow(i, 3));
  }
  return result.reduce((a, b) => a + b, 0);
}

function sumCubes(n) {
  if (n == 1) {
    return n ** 3;
  } else {
    return n ** 3 + sumCubes(n - 1);
  }
}

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
// You may assume the input is always valid.
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
// Solution
function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++
// Solution
function generateShape(n) {
  let row = "+".repeat(n);
  let square = [];
  for (let i = 0; i < n; i++) {
    square.push(row);
  }
  return square.join("\n");
}

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
// Triangular Numbers cannot be negative so return 0 if a negative number is given.
// Solution
function sumTriangularNumbers(n) {
  if (n < 1) return 0;
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    sum += (k * (k + 1)) / 2;
  }
  return sum;
}

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Solution
function divCon(x) {
  let numbers = x.filter((item) => typeof item === "number");
  let strings = x.filter((item) => typeof item === "string");
  return (
    numbers.reduce((a, b) => a + b, 0) -
    strings.map((item) => +item).reduce((a, b) => a + b, 0)
  );
}

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// More examples in the test cases.
// Good luck!
// Solution
function repeats(arr) {
  return arr
    .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}

// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.
// For example:
// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
// Solution
function add(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}

function add(arr) {
  let sum = arr[0];
  const result = [];
  for (let i = 1; i <= arr.length; i++) {
    result.push(sum);
    sum += arr[i];
  }
  return result;
}

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.
// Notes:
// The input array will always be valid and formatted as in the example above.
// Solution
function isRubyComing(list) {
  return list.filter((item) => item.language === "Ruby").length > 0
    ? true
    : false;
}

function isRubyComing(list) {
  return list.some((e) => e.language === "Ruby");
}

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// your function should return the following array:
// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];
// Notes:
// The order of the properties in the objects does not matter (except in COBOL).
// The input array will always be valid and formatted as in the example above.
// Solution
function greetDevelopers(list) {
  return list.map((item) =>
    Object.assign(item, {
      greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
    })
  );
}

const greetDevelopers = (list) =>
  list.map((dev) => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
// Solution
let hasUniqueChars = (str) => new Set(str).size === str.length;

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
// •	lst contains integers, that means it may contain some negative numbers
// •	if lst is empty or contains a single element, return 0
// •	lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!
// Solution
function maxDiff(list) {
  if (list.length <= 1) return 0;
  let sorted = list.sort((a, b) => a - b);
  let a = sorted[sorted.length - 1];
  let b = sorted[0];
  return a - b;
}

function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}

// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
// ________________________________________
// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
// ________________________________________
// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.
// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8
// Note about errors
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.
// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)
// Solution
function overTheRoad(address, n) {
  // Calculate the total number of houses
  const totalHouses = 2 * n;
  // Calculate the house number on the opposite side
  return totalHouses + 1 - address;
}

// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Examples
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".
// Notes
// Tested strings are at least 8 characters long.
// Solution
function sortMyString(S) {
  let evens = S.split("")
    .filter((item, i) => i % 2 === 0)
    .join("");
  let odds = S.split("")
    .filter((item, i) => i % 2 !== 0)
    .join("");
  return `${evens} ${odds}`;
}

// Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined if any of the values aren't numbers.
// Solution
function cubeOdd(arr) {
  return arr.some((item) => !Number.isInteger(item))
    ? undefined
    : arr
        .filter((item) => item % 2 !== 0)
        .map((item) => Math.pow(item, 3))
        .reduce((a, b) => a + b, 0);
}

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
// Consult the solution set-up for the exact data structure implementation depending on your language.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// Solution
const orderedCount = function (text) {
  const countMap = new Map();
  const order = [];
  for (const char of text) {
    if (!countMap.has(char)) {
      countMap.set(char, 0);
      order.push(char);
    }
    countMap.set(char, countMap.get(char) + 1);
  }
  const result = order.map((char) => [char, countMap.get(char)]);
  return result;
};

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:
// •	The starting array sequence is [1,2,3,4,5,6,7,8,9]
// •	The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// •	Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).
// Solution
function findDeletedNumber(arr, mixArr) {
  const sum1 = arr.reduce((acc, cur) => acc + cur, 0);
  const sum2 = mixArr.reduce((acc, cur) => acc + cur, 0);
  return sum1 - sum2;
}

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)
// Solution
reverse = function (array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.
// Notes:
// The input array will always be valid and formatted as in the example above.
// Solution
function getFirstPython(list) {
  let result = list.filter((item) => item.language === "Python");
  return result.length > 0
    ? `${result[0].firstName}, ${result[0].country}`
    : "There will be no Python developers";
}

function getFirstPython(list) {
  const dev = list.find((x) => x.language === "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
}

// Task
// Given an array/list of integers, find the Nth smallest element in the array.
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2
// Solution
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

// Definition
// A Tidy number is a number whose digits are in non-decreasing order.
// Task
// Given a number, Find if it is Tidy or not.
// Solution
function tidyNumber(n) {
  let sorted = +n.toString().split("").sort().join("");
  return n === sorted;
}

// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"
// Solution
function spacify(str) {
  return str.split("").join(" ");
}

// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Task
// Given a number determine if it Automorphic or not.
// Solution
function automorphic(n) {
  let numberLength = n.toString().split("").length;
  let firstLastNumber = +Math.pow(n, 2)
    .toString()
    .split("")
    .splice(-numberLength)
    .join("");
  return firstLastNumber === n ? "Automorphic" : "Not!!";
}

const automorphic = (n) =>
  String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";

// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".
// Solution
function strong(n) {
  let arr = String(n).split("");
  let sum = 0;
  function factorial(fnNum) {
    if (fnNum <= 1) {
      return 1;
    } else {
      return fnNum * factorial(fnNum - 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i]);
  }
  return n == sum ? "STRONG!!!!" : "Not Strong !!";
}

// Your task is to add up letters to one letter.
// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
// Solution
function addLetters(...letters) {
  if (letters.length === 0) {
    return "z";
  }
  const positions = letters.map(
    (letter) => letter.charCodeAt(0) - "a".charCodeAt(0) + 1
  );
  const sum = positions.reduce((total, current) => total + current, 0);
  const resultPosition = ((sum - 1) % 26) + 1;
  const resultLetter = String.fromCharCode(
    "a".charCodeAt(0) + resultPosition - 1
  );
  return resultLetter;
}

// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// ________________________________________
// Notes :
// Array/list size is at least 3 .
// Array/list numbers could be a mixture of positives , negatives and zeros .
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
// Solution
function maxTriSum(numbers) {
  let uniqueValues = [...new Set(numbers)];
  uniqueValues.sort((a, b) => b - a);
  return uniqueValues[0] + uniqueValues[1] + uniqueValues[2];
}

// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.
// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.
// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.
// Solution
function balancedNum(number) {
  const numStr = number.toString();
  const len = numStr.length;
  let leftSum = 0,
    rightSum = 0,
    middle;
  if (len % 2 === 1) {
    middle = Math.floor(len / 2);
    for (let i = 0; i < middle; i++) {
      leftSum += parseInt(numStr[i], 10);
      rightSum += parseInt(numStr[len - 1 - i], 10);
    }
  } else {
    middle = len / 2;
    for (let i = 0; i < middle - 1; i++) {
      leftSum += parseInt(numStr[i], 10);
      rightSum += parseInt(numStr[len - 1 - i], 10);
    }
  }
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
// Note: the scores will always be unique (so no duplicate values)
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// Solution
function myLanguages(results) {
  return Object.entries(results)
    .filter(([language, score]) => score >= 60)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([language]) => language);
}

// If you finish this kata, you can try Insane Coloured Triangles by Bubbler, which is a much harder version of this one.
// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.
// The different possibilities are:
// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G
// With a bigger example:
// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G
// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.
// The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
// If you are only given one colour as the input, return that colour.
// Solution
function triangle(row) {
  while (row.length > 1) {
    let newRow = "";
    for (let i = 0; i < row.length - 1; i++) {
      newRow += getNextColor(row[i], row[i + 1]);
    }
    row = newRow;
  }
  return row;
}

function getNextColor(a, b) {
  if (a === b) return a;
  if ((a === "R" && b === "G") || (a === "G" && b === "R")) return "B";
  if ((a === "R" && b === "B") || (a === "B" && b === "R")) return "G";
  if ((a === "G" && b === "B") || (a === "B" && b === "G")) return "R";
}

// Task
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
// Example
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
// After day 1 --> 100
// After night 1 --> 90
// After day 2 --> 190
// After night 2 --> 180
// After day 3 --> 280
// After night 3 --> 270
// After day 4 --> 370
// After night 4 --> 360
// After day 5 --> 460
// After night 5 --> 450
// After day 6 --> 550
// After night 6 --> 540
// After day 7 --> 640
// After night 7 --> 630
// After day 8 --> 730
// After night 8 --> 720
// After day 9 --> 820
// After night 9 --> 810
// After day 10 --> 910
// For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.
// Because the plant reach to the desired height at day 1(10 meters).
// After day 1 --> 10
// Input/Output
// [input] integer upSpeed
// A positive integer representing the daily growth.
// Constraints: 5 ≤ upSpeed ≤ 100.
// [input] integer downSpeed
// A positive integer representing the nightly decline.
// Constraints: 2 ≤ downSpeed < upSpeed.
// [input] integer desiredHeight
// A positive integer representing the threshold.
// Constraints: 4 ≤ desiredHeight ≤ 1000.
// [output] an integer
// The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).
// Solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;
  while (currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) {
      break;
    }
    currentHeight -= downSpeed;
  }
  return days;
}

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
// Solution
function alternateCase(s) {
  return s
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
}

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// Solution
function solve(s) {
  let counts = [0, 0, 0, 0]; // Array to hold counts of uppercase, lowercase, numbers, special characters
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= "A" && char <= "Z") {
      counts[0]++; // Uppercase letters
    } else if (char >= "a" && char <= "z") {
      counts[1]++; // Lowercase letters
    } else if (char >= "0" && char <= "9") {
      counts[2]++; // Numbers
    } else {
      counts[3]++; // Special characters
    }
  }
  return counts;
}

const solve = (x) => {
  let u = x.match(/[A-Z]/g) || [];
  let d = x.match(/[a-z]/g) || [];
  let n = x.match(/[0-9]/g) || [];
  let s = x.match(/[^A-Z0-9]/gi) || [];
  return [u.length, d.length, n.length, s.length];
};

// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
// ________________________________________
// Notes
// •	Return an array/list where Even numbers come first then odds
// •	Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
// •	Array/list size is at least 4 .
// •	Array/list numbers could be a mixture of positives , negatives .
// •	Have no fear , It is guaranteed that no Zeroes will exists .
// •	Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
// ________________________________________
// Input >> Output Examples:
// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .
// ________________________________________
// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:
// •	Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }
// •	Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared
// Solution
function menFromBoys(arr) {
  let set = new Set(arr);
  let newArr = [...set];
  let even = newArr.filter((item) => item % 2 === 0).sort((a, b) => a - b);
  let odd = newArr.filter((item) => item % 2 !== 0).sort((a, b) => b - a);
  return [...even, ...odd];
}

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"]
//the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes
// •	If the array is null/nil/None or empty you should return empty array ([]).
// •	The rotten fruit name will be in this camelcase (rottenFruit).
// •	The returned array should be in lowercase.
// Solution
function removeRotten(bagOfFruits) {
  if (bagOfFruits === null || bagOfFruits === undefined) {
    return [];
  }
  let result = bagOfFruits.map((item) =>
    item.startsWith("rotten") ? item.replace("rotten", "").toLowerCase() : item
  );
  return result;
}

function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}

// Write a class Block that creates a block (Duh..)
// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
// Define these methods:
// `getWidth()` return the width of the `Block`
// `getLength()` return the length of the `Block`
// `getHeight()` return the height of the `Block`
// `getVolume()` return the volume of the `Block`
// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
//     b.getLength() // -> 4
//     b.getHeight() // -> 6
//     b.getVolume() // -> 48
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed
// Any feedback would be much appreciated
// Solution
class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.length * this.height +
        this.height * this.width)
    );
  }
}

// ASC Week 1 Challenge 4 (Medium #1)
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// Note that spaces should be ignored in this case.
// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
// Solution
function vaporcode(string) {
  return string
    .replaceAll(" ", "")
    .split("")
    .map((item) => item.toUpperCase())
    .join("  ");
}

// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.
// More examples in the test cases.
// Good luck!
// Solution
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length - 1; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      count++;
    }
  }
  return count;
}

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
// Solution
function last(x) {
  return x.split(" ").sort((a, b) => {
    const lastCharA = a[a.length - 1];
    const lastCharB = b[b.length - 1];
    if (lastCharA < lastCharB) return -1;
    if (lastCharA > lastCharB) return 1;
    return 0;
  });
}

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"
function explode(s) {
  return s
    .split("")
    .map((item) => item.repeat(item))
    .join("");
}

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
// Notes:
// •	return an empty array if your array is empty
// •	arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2
// Solution
function incrementer(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// Happiness rating will be total score / number of people in the room.
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
// Solution
function outed(meet, boss) {
  let sum = 0;
  for (let key in meet) {
    if (meet.hasOwnProperty(key)) {
      sum += meet[key];
    }
  }
  sum += meet[boss];
  console.log(sum);
  const keys = Object.keys(meet);
  const numberOfKeys = keys.length;

  const result = sum / numberOfKeys;

  if (result > 5) {
    return "Nice Work Champ!";
  } else {
    return "Get Out Now!";
  }
}

function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
// Solution
function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-size)
    .reduce((a, b) => a * b);
}

// This Kata is intended as a small challenge for my students
// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
// Example (Input --> Output)
// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""
// Solution
var removeVowels = function (str) {
  const pattern = /[aeiou]/gi;
  let result = str
    .split("")
    .map((item) => (item.match(pattern) ? "" : item))
    .join("");
  return result;
};

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Solution
function unluckyDays(year) {
  let counter = 0;

  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      counter++;
    }
  }

  return counter;
}

// Haskell has some useful functions for dealing with lists:
// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:
// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Solution
function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!
// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"
// Solution
function meeting(x) {
  return x.includes("O") ? x.indexOf("O") : "None available!";
}

// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
// Notes
// •	Array/list size is at least 3 .
// •	Array/list's numbers Will be mixture of positives and negatives also zeros_
// •	Repetition of numbers in the array/list could occur.
// •	The Maximum Gap is computed Regardless the sign.
// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// •	The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// •	The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
// •	Note : Regardless the sign of negativity .
// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
// Explanation:
// •	The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
// •	Note : Regardless the sign of negativity .
// maxGap ({-54,37,0,64,640,0,-15}) //return (576)
// Explanation:
// •	The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
// •	Note : Regardless the sign of negativity.
// Solution
function maxGap(numbers) {
  let sort = numbers.sort((a, b) => a - b);
  let diff = [];
  for (let i = 0; i < sort.length - 1; i++) {
    diff.push(sort[i] - sort[i + 1]);
  }
  let result = diff.map((item) => Math.abs(item)).sort((a, b) => a - b);
  return result[result.length - 1];
}

// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):
// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:
// •	The order of the languages in the object does not matter.
// •	The count value should be a valid number.
// •	The input array will always be valid and formatted as in the example above.
// Solution
function countLanguages(list) {
  const result = list.map((item) => item.language);
  return result.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}

// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.
// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .
// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// Explanation:
// We add two smallest elements (4 + 2), their sum is 6 .
// Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
// Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
// Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
// Explanation:
// We add two smallest elements (19 + 17), their sum is 36 .
// Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
// We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
// Solution
function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b);
  let sum = 0;
  let steps = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    steps++;
    if (sum >= value) {
      return steps - 1;
    }
  }
}

// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
// Given a string of binary, return the version the photocopier gives you as a string.
// Solution
function broken(x) {
  return x
    .split("")
    .map((item) => (item === "0" ? "1" : "0"))
    .join("");
}

function broken(x) {
  return x.replace(/./g, (char) => (char === "1" ? "0" : "1"));
}

// This kata is part of the collection Mary's Puzzle Books.
// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:
// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.
// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.
// NOTES:
// • If both strings are the same, return []
// • Both strings will always be the same length
// • Capitalization and punctuation matter
// Solution
function spot(s1, s2) {
  let differences = [];
  s1.split("").forEach((char, index) => {
    if (char !== s2[index]) {
      differences.push(index);
    }
  });
  return differences;
}

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false
// Note :
// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false
// Solution
function tripleX(str) {
  let firstX = str.indexOf("x");

  if (firstX === -1) {
    return false;
  }

  return str.slice(firstX, firstX + 3) === "xxx";
}

const tripleX = (str) => /^[^x]*xxx/.test(str);

// Input:
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Solution
function containAllRots(strng, arr) {
  if (strng === "") return true;
  for (let i = 0; i < strng.length; i++) {
    let rotation = strng.slice(i) + strng.slice(0, i);
    if (!arr.includes(rotation)) {
      return false;
    }
  }
  return true;
}

// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
// Example:
// Split the below string into other strings of size #3
// 'supercalifragilisticexpialidocious'
// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:
// String length is always greater than 0
// String has no spaces
// Size is always positive
// Solution
var splitInParts = function (s, partLength) {
  let result = [];
  for (let i = 0; i < s.length; i += partLength) {
    result.push(s.slice(i, i + partLength));
  }
  return result.join(" ");
};

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
// You task is to initialize the middle names (if there is any).
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
// Solution
function initializeNames(name) {
  let array = name.split(" ");
  if (array.length < 3) {
    return name;
  }

  for (let i = 1; i < array.length - 1; i++) {
    array[i] = array[i][0] + ".";
  }

  return array.join(" ");
}

// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// For example:
// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.
// More examples in the tests cases.
// Solution
function solve(a, b) {
  let uniqueInA = a
    .split("")
    .filter((char) => !b.includes(char))
    .join("");
  let uniqueInB = b
    .split("")
    .filter((char) => !a.includes(char))
    .join("");

  return uniqueInA + uniqueInB;
}

// Nickname Generator
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
// If the 3rd letter is a consonant, return the first 3 letters.
// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.
// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".
// Notes:
// •	Vowels are "aeiou", so discount the letter "y".
// •	Input will always be a string.
// •	Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// •	The input can be modified
// Solution
function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Error: Name too short";
  } else if (
    name[2] === "a" ||
    name[2] === "e" ||
    name[2] === "i" ||
    name[2] === "o" ||
    name[2] === "u"
  ) {
    return name.substr(0, 4);
  } else {
    return name.substr(0, 3);
  }
}

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
// Note that the number will always be non-negative (>= 0).
// Solution
function insertDash(num) {
  let str = num.toString();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i < str.length - 1 && str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      result += "-";
    }
  }
  return result;
}

function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
// Note: the input will not be empty.
// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
// Solution
function calculate(str) {
  return str
    .replace(/plus/g, "+")
    .replace(/minus/g, "-")
    .split(/(?=[+-])/g)
    .reduce((acc, num) => acc + Number(num), 0)
    .toString();
}

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.
// Example:
// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.
// Solution
function divisibleByThree(str) {
  return str
    .split("")
    .map((item) => Number(item))
    .reduce((a, b) => a + b) %
    3 ===
    0
    ? true
    : false;
}

// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
// Example 1:
// Input: s = "hello"
// Output: "holle"
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
// Constraints:
// •	1 <= s.length <= 3 * 105
// •	s consist of printable ASCII characters.
// Solution
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const chars = s.split("");
  const vowelList = [];

  for (let char of chars) {
    if (vowels.includes(char)) {
      vowelList.push(char);
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      chars[i] = vowelList.pop();
    }
  }

  return chars.join("");
};

var reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};

// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
// Solution
function covfefe(str) {
  return str.includes("coverage")
    ? str.replace(/coverage/g, "covfefe")
    : str + " covfefe";
}

// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
// For example:
// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.
// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
// Note that the return string must list the letters in order of their first appearance in the original string.
// More examples:
// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)
// Solution
function getStrings(city) {
  const counts = {};
  const formattedCity = city.toLowerCase();

  for (let char of formattedCity) {
    if (/[a-z]/.test(char)) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
  }

  const result = [];
  for (let char of formattedCity) {
    if (/[a-z]/.test(char) && !result.find((e) => e[0] === char)) {
      result.push(`${char}:${"*".repeat(counts[char])}`);
    }
  }

  return result.join(",");
}

function getStrings(city) {
  return [...new Set(city.toLowerCase().replace(/[^a-z]/g, ""))]
    .map(
      (char) =>
        `${char}:${"*".repeat(city.toLowerCase().split(char).length - 1)}`
    )
    .join(",");
}

// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.
// Examples:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"
// Solution
function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, "0").replace(/[aeiou]/gi, "1");
}

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
// Note that numbers written as strings are strings and must be sorted with the other strings.
// Solution
function dbSort(a) {
  let numbers = [];
  let strings = [];
  a.forEach((item) =>
    Number.isInteger(item) ? numbers.push(item) : strings.push(item)
  );

  numbers.sort((a, b) => a - b);
  strings.sort();

  return numbers.concat(strings);
}

// back·ro·nym
// An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.
// "Biodiversity Serving Our Nation", or BISON
// (from https://en.oxforddictionaries.com/definition/backronym)
// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
// dict["P"] == "perfect"
// Examples
// "dgm" ==> "disturbing gregarious mustache"
// "lkj" ==> "literal klingon joke"
// Solution
var makeBackronym = function (string) {
  return string
    .toUpperCase()
    .split("")
    .map((char) => dict[char])
    .join(" ");
};

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of.
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.
// Solution
function flyBy(lamps, drone) {
  const dronePathLength = drone.length;
  return lamps
    .split("")
    .map((lamp, index) => (index < dronePathLength ? "o" : "x"))
    .join("");
}

// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Task
// Given a number, Find if it is Disarium or not .
// Solution
function disariumNumber(n) {
  return n
    .toString()
    .split("")
    .map((item, i) => Math.pow(item, i + 1))
    .reduce((a, b) => a + b) === n
    ? "Disarium !!"
    : "Not !!";
}

// Introduction
// Digital Cypher assigns to each letter of the alphabet unique number. For example:
//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:
//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :
//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21
//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.
// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.
// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
// Solution
function encode(str, n) {
  const keyDigits = n.toString().split("").map(Number);

  return str.split("").map((char, i) => {
    const charPosition = char.charCodeAt(0) - 96;

    const keyDigit = keyDigits[i % keyDigits.length];

    return charPosition + keyDigit;
  });
}

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
// Ex.
// multiples(3, 5.0)
// should return
// [5.0, 10.0, 15.0]
// Solution
function multiples(m, n) {
  let result = [];
  for (let i = 1; i <= m; i++) {
    result.push(i * n);
  }
  return result;
}


// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
// C.....m returns 'Escaped!' <-- more than three characters between
// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
// Solution
function catMouse(x) {
  return x.split("").filter(item => item === ".").length > 3 ? "Escaped!" : "Caught!";
}

function catMouse(x) {
  return x.length <= 5 ? 'Caught!' : 'Escaped!';
}


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1
// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
// Solution
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// Solution
function stray(numbers) {
  let arr = numbers.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}


// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); returns 1
// str_count("Hello", 'l'); returns 2
// str_count("", 'z'); returns 0

// Solution
function strCount(str, letter) {
  let number = 0;
  str.split("").map((item) => (item === letter ? number++ : number));
  return number;
}


// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Solution
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}


// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).
// Solution
function logicalCalc(array, op){
  switch (op) {
    case "AND":
      return array.reduce((acc, v) => acc && v, true);

    case "OR":
      return array.reduce((acc, v) => acc || v, false);

    case "XOR":
      return array.reduce((acc, v) => acc !== v, false);

    default:
      throw new Error("Unknown operator");
  }
}

// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
// Solution
function array(string) {
  if (!string) return null;
  const arr = string.split(",");
  if (arr.length <= 2) return null;
  return arr.slice(1, -1).join(" ");
}

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
// Solution
function mergeArrays(a, b) {
  return [...new Set([...a, ...b].sort((a, b) => a - b))]
}

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name
// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// Random input limits:
// 6 ≤ Players ≤ 50
// 5000 ≤ Position ≤ 50000
// Solution
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
// Solution
function isVow(a) {
  return a.map(num => {
    const char = String.fromCharCode(num);
    return "aeiou".includes(char) ? char : num;
  });
}

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
// Solution
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"
// Note: if this seems too simple for you try the next level
// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays
// Solution
function printArray(array){
  return array.join(",");
}

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.
// Examples:
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
// Solution
function distinct(a) {
  return Array.from(new Set(a));
}

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.
// Solution
function addLength(str) {
  return str.split(" ").map(e => `${e} ${e.length}`);
}

// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. 
// It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a
// Solution
const arrowFunc = function(arr) {
  return arr.map(a => String.fromCharCode(a)).join('');
}

// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element
// in a is strictly greater than the sum of the cubes of each element in b.
// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Solution
function arrayMadness(a, b) {
  return a.reduce((el1, el2) => el1 + el2 * el2, 0) > b.reduce((el1, el2) => el1 + el2 * el2 * el2, 0);
}

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.
// If, there are no JavaScript developers from Europe then your function should return 0.
// Solution
function countDevelopers(list) {
  let newArray = list.filter(
    (item) => item.continent === "Europe" && item.language === "JavaScript"
  );
  return newArray.length > 0 ? newArray.length : 0;
}

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
// For an example list of 1, 3, 5, 7
// 1. Add all of the numbers
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 16/4 = 4
// 3. The mean (or average) of this list is 4
// Solution
function findAverage(nums) {
  return nums.reduce((a, b) => (a + b), 0) / nums.length;
}

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence []
// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];
// Solution
function first(arr, n = 1) {
  return arr.slice(0, n);
}

// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.
// For example:
// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
// Solution
function add(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Solution
function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

// This is a question from codingbat
// Given an integer n greater than or equal to 0, create and return an array with the following pattern:
// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

// Solution
function squareUp(n) {
  let res = [];
  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--) res.push(j <= i ? j : 0);
  return res;
}

// This Kata is intended as a small challenge for my students
// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
// Example (Input --> Output)
// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""
// Solution
var removeVowels = function (str) {
  const pattern = /[aeiou]/gi;
  let result = str
    .split("")
    .map((item) => (item.match(pattern) ? "" : item))
    .join("");
  return result;
};

// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
// Solution
function uefaEuro2016(teams, scores) {
  return `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] > scores[1]
      ? teams[0] + " won!"
      : scores[0] < scores[1]
      ? teams[1] + " won!"
      : "teams played draw."
  }`;
}

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age
// and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers,
// so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
// Solution
function differenceInAges(ages){
  let newArr = ages.sort((a, b) => a - b);
  let young = newArr[0];
  let old = newArr[newArr.length - 1];
  let dif = old - young;
  return [young, old, dif];
}

function differenceInAges (ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages)
    diff = max - min
  return [min, max, diff]
}

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g.,
// Friday May 2, 7pm.
// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
// Write a function that takes the website date/time in its original string format and returns the shortened format.
// Input
// Input will always be a string, e.g., "Friday May 2, 7pm".
// Output
// Output will be the shortened string, e.g., "Friday May 2".
// Solution
function shortenToDate(longDate) {
  let x = longDate.indexOf(",");
  return longDate.slice(0, x);
}

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. 
// He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 20_year_estimate = one_year_total * 20
// You will receive the following data structure representing the stairs Suzuki logged in a year.
// You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.
// Each weekday in the stairs array is an array.
// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940,
// 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.
// Solution
function stairsIn20(s){
  return s.flat().reduce((sum, n) => sum + n, 0) * 20;
}

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
// Solution
const areaOrPerimetr = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]
// Solution
function monkeyCount(n) {
  let array = [];
  let i = 0;
  while (i < n) {
    i++;
    array.push(i);
  }
  return array;
}

// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// Solution
const sequenceSumm = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let array = [];
  for (let i = begin; i <= end; i += step) {
    array.push(i);
  }
  return array.reduce((a, b) => a + b);
};

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
// Solution
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    const interestEarned = principal * interest;
    const taxPaid = interestEarned * tax;
    principal += interestEarned - taxPaid;
    years++;
  }
  return years;
}

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
// Solution
function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  if (arr.length < 2) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }

  return sum;
}

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
// Solution
function squareOrSquareRoot(array) {
  return array.map(item => Math.sqrt(item) % 1 === 0 ? Math.sqrt(item) : Math.pow(item, 2));
}
