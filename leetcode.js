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
var rearrangeArray = function (nums) {
  // Separate positive and negative numbers
  const positiveNums = nums.filter((num) => num > 0);
  const negativeNums = nums.filter((num) => num < 0);
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
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b); // Sorting the array in non-decreasing order
  let maxPerimeter = -1; // Initializing maxPerimeter to a non-positive value
  let curSum = 0; // Initializing the current sum to 0

  // Iterating through the sorted array
  for (let i = 0; i < nums.length; i++) {
    if (i >= 2 && curSum > nums[i]) {
      // Checking if a valid triplet is found
      maxPerimeter = curSum + nums[i]; // Updating maxPerimeter
    }
    curSum += nums[i]; // Updating the current sum
  }

  return maxPerimeter; // Returning the maximum perimeter found
};

// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Solution
var findLeastNumOfUniqueInts = function (arr, k) {
  const frequency = {};
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  const uniqueNums = Object.keys(frequency).map(Number);
  uniqueNums.sort((a, b) => frequency[a] - frequency[b]);

  let uniqueCount = uniqueNums.length;
  let removeCount = 0;

  for (const num of uniqueNums) {
    const frequencyOfNum = frequency[num];
    if (k >= frequencyOfNum) {
      k -= frequencyOfNum;
      removeCount += 1;
    } else {
      break;
    }
  }

  return uniqueCount - removeCount;
};

// You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
// While moving from building i to building i+1 (0-indexed),
// If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
// If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
// Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.
// Solution
var furthestBuilding = function (heights, bricks, ladders) {
  const n = heights.length - 1;
  const maxPQ = new MaxPriorityQueue();
  for (let i = 0; i < n; i++) {
    const curDiff = heights[i + 1] - heights[i];
    if (curDiff > 0) {
      if (bricks < curDiff) {
        if (ladders === 0) return i;
        ladders -= 1;
        if (maxPQ.isEmpty()) continue;
        const maxDiff = maxPQ.front().element;
        if (maxDiff > curDiff) {
          maxPQ.dequeue();
          maxPQ.enqueue(curDiff);
          // we'll add maxDiff amount of bricks back to current bricks
          // we'll use curDiff amount of bricks from current bricks
          bricks += maxDiff - curDiff;
        }
      } else {
        bricks -= curDiff;
        maxPQ.enqueue(curDiff);
      }
    }
  }
  return n;
};

// You are given an integer n. There are n rooms numbered from 0 to n - 1.
// You are given a 2D integer array meetings where meetings[i] = [starti, endi] means that a meeting will be held during the half-closed time interval [starti, endi). All the values of starti are unique.
// Meetings are allocated to rooms in the following manner:
// Each meeting will take place in the unused room with the lowest number.
// If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
// When a room becomes unused, meetings that have an earlier original start time should be given the room.
// Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.
// A half-closed interval [a, b) is the interval between a and b including a and not including b.
// Example 1:
// Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
// Output: 0
// Explanation:
// - At time 0, both rooms are not being used. The first meeting starts in room 0.
// - At time 1, only room 1 is not being used. The second meeting starts in room 1.
// - At time 2, both rooms are being used. The third meeting is delayed.
// - At time 3, both rooms are being used. The fourth meeting is delayed.
// - At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
// - At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
// Both rooms 0 and 1 held 2 meetings, so we return 0.
// Solution
var mostBooked = function (n, meetings) {
  const counts = new Array(n).fill(0);
  // Store the end time of each room
  const endings = new Array(n).fill(0);
  // Sort by start time
  meetings.sort((a, b) => a[0] - b[0]);

  for (const [start, end] of meetings) {
    // First, look for first room where meeting is compatible
    let roomIdx = -1;
    for (let i = 0; i < n; i++) {
      if (start >= endings[i]) {
        roomIdx = i;
        break;
      }
    }
    // If no room available, use earliest ending time instead
    if (roomIdx === -1) {
      roomIdx = 0;
      for (let i = 0; i < n; i++) {
        if (endings[i] < endings[roomIdx]) roomIdx = i;
      }
    }
    counts[roomIdx]++;
    // Update room end time, use difference when meeting is delayed
    endings[roomIdx] =
      endings[roomIdx] < start ? end : endings[roomIdx] + (end - start);
  }
  let maxIdx = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > counts[maxIdx]) maxIdx = i;
  }
  return maxIdx;
};

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Solution
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
