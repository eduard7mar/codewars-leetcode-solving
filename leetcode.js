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
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' '); 
        const wordCount = words.length;
        maxWords = Math.max(maxWords, wordCount);
    }
    return maxWords;
};

var mostWordsFound = function(sentences) {
    let count = 1
    for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ").length
    if(words > count){
        count = words
      }
    }
    return count
};