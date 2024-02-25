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

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Solution
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
};

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2
// Solution
var findJudge = function (n, trust) {
  // Create an array to store the count of trusts for each person
  const trustCounts = new Array(n + 1).fill(0);
  // Iterate through the trust array to update counts
  for (const [a, b] of trust) {
    trustCounts[a]--;
    trustCounts[b]++;
  }
  // Iterate through the trust counts to find the potential town judge
  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }
  // If no town judge is found, return -1
  return -1;
};

// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
// Example 1:
// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
// Solution
function findCheapestPrice(n, flights, src, dst, k) {
  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
    let tmpPrices = prices.slice(); // Make a copy of prices for this iteration
    for (let flight of flights) {
      let [from, to, price] = flight;
      if (prices[from] === Infinity) continue; // Skip if from city is not reachable
      // If the new price to 'to' city is cheaper, update it in the tmpPrices
      tmpPrices[to] = Math.min(tmpPrices[to], prices[from] + price);
    }
    prices = tmpPrices; // Update prices for the next iteration
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
}

// You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.
// Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.
// The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.
// Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.
// Example 1:
// Input: n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1
// Output: [0,1,2,3,5]
// Explanation:
// At time 0, person 0 shares the secret with person 1.
// At time 5, person 1 shares the secret with person 2.
// At time 8, person 2 shares the secret with person 3.
// At time 10, person 1 shares the secret with person 5.​​​​
// Thus, people 0, 1, 2, 3, and 5 know the secret after all the meetings.
// Solution
var findAllPeople = function (n, meetings, firstPerson) {
  const find = (groups, index) => {
    while (index !== groups[index]) {
      index = groups[index];
    }
    return index;
  };

  let groups = new Array(100000).fill(0).map((_, i) => i);
  let result = [];

  groups[firstPerson] = 0;

  meetings.sort((a, b) => a[2] - b[2]);

  let i = 0;
  while (i < meetings.length) {
    let currentTime = meetings[i][2];
    let temp = [];
    while (i < meetings.length && meetings[i][2] === currentTime) {
      let g1 = find(groups, meetings[i][0]);
      let g2 = find(groups, meetings[i][1]);
      groups[Math.max(g1, g2)] = Math.min(g1, g2);
      temp.push(meetings[i][0]);
      temp.push(meetings[i][1]);
      ++i;
    }
    for (let j = 0; j < temp.length; ++j) {
      if (find(groups, temp[j]) !== 0) {
        groups[temp[j]] = temp[j];
      }
    }
  }

  for (let j = 0; j < n; ++j) {
    if (find(groups, j) === 0) {
      result.push(j);
    }
  }

  return result;
};

// You are given a 0-indexed integer array nums, and you are allowed to traverse between its indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest common divisor.
// Your task is to determine if for every pair of indices i and j in nums, where i < j, there exists a sequence of traversals that can take us from i to j.
// Return true if it is possible to traverse between all such pairs of indices, or false otherwise.
// Example 1:
// Input: nums = [2,3,6]
// Output: true
// Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
// To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
// To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.
// Solution
var canTraverseAllPairs = function(nums) {
  if (nums.length === 1) return true;
  const n = nums.length;
  const maxElement = Math.max(...nums);
  if (Math.min(...nums) === 1) return false;
  const factorArray = factorsCalculator(maxElement);
  
  const parent = [...Array(maxElement + 1).keys()];
  const rank = Array(maxElement + 1).fill(1);

  for (let i = 0; i < nums.length; i++) {
      let x = nums[i];
      while (x > 1) {
          const p = factorArray[x];
          Union(parent, rank, p, nums[i]);
          while (x % p === 0) {
              x = x / p;
          }
      }
  }

  const p = Find(parent, nums[0]);
  for (let i = 1; i < nums.length; i++) {
      if (Find(parent, nums[i]) !== p) return false;
  }

  return true;
};

function factorsCalculator(n) {
  const dp = Array(n + 2).fill().map((_, i) => i);
  for (let i = 2; i <= n; i++) {
      if (dp[i] === i) {
          for (let j = i * 2; j <= n; j += i) {
              if (dp[j] === j) dp[j] = i;
          }
      }
  }
  return dp;
}

function Find(parent, a) {
  return parent[a] = parent[a] === a ? a : Find(parent, parent[a]);
}

function Union(parent, rank, a, b) {
  a = Find(parent, a);
  b = Find(parent, b);
  if (a === b) return;
  if (rank[a] < rank[b]) {
      [a, b] = [b, a];
  }
  parent[b] = a;
  rank[a] += rank[b];
}