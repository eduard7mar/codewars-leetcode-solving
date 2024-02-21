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
};

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
function dontGiveMeFive(start, end){
  let count = 0;
  for (let number = start; number <= end; number++) {
    if (!number.toString().includes('5')) {
      count++;
    }
  }
  return count;
}

function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

// Your function takes two arguments:
// 1.	current father's age (years)
// 2.	current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// Solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}