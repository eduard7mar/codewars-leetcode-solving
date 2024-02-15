// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Solution
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + char;
  }
  return result;
};

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

// Example 1:
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

// Solution
var mostWordsFound = function (sentences) {
  let maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    const wordCount = words.length;
    maxWords = Math.max(maxWords, wordCount);
  }
  return maxWords;
};

var mostWordsFound = function (sentences) {
  let count = 1;
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ").length;
    if (words > count) {
      count = words;
    }
  }
  return count;
};


// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

// Solution
var rearrangeArray = function(nums) {
  // Separate positive and negative numbers
  const positiveNums = nums.filter(num => num > 0);
  const negativeNums = nums.filter(num => num < 0);
  // Array to store the result
  const result = [];
  // Merge arrays alternately
  for (let i = 0; i < positiveNums.length; i++) {
      result.push(positiveNums[i], negativeNums[i]);
  }
  return result;
};


// You are given an array of positive integers nums of length n.
// A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.
// Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
// The perimeter of a polygon is the sum of lengths of its sides.
// Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.

// Example 1:

// Input: nums = [5,5,5]
// Output: 15
// Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.

// Solution
var largestPerimeter = function(nums) {
  nums.sort((a,b)=>a-b); // Sorting the array in non-decreasing order
  let maxPerimeter = -1; // Initializing maxPerimeter to a non-positive value
  let curSum = 0; // Initializing the current sum to 0
  
  // Iterating through the sorted array
  for(let i = 0; i < nums.length; i++) {
      if(i >= 2 && curSum > nums[i]) { // Checking if a valid triplet is found
          maxPerimeter = curSum + nums[i]; // Updating maxPerimeter
      }
      curSum += nums[i]; // Updating the current sum
  }

  return maxPerimeter; // Returning the maximum perimeter found
}