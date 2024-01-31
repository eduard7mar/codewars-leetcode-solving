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
function stringToArray(string){
  return string.split(" ");
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// •	If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// •	If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// Solution
function hoopCount (n) {
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";  
}

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Solution
function reverseWords(str){
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
var countSheep = function(num) {
  if (num === 0) {
    return "";
  }
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(`${i} sheep...`);
  }
  return result.join("");
}

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}




