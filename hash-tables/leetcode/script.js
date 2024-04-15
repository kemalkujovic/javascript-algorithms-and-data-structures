function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}
itemInCommon([1, 3, 5], [2, 4, 5]);

// HT: Find Duplicates ( ** Interview Question)
// In this exercise, you are required to write a JavaScript function called findDuplicates.
// This function will take an array of numbers as its only parameter.
// Your goal is to identify and return all the numbers that appear more than once in the array.

// The function should return a new array containing the duplicate numbers.
// The function should return an empty array if there are no duplicate numbers.

// Examples:

function findDuplicates(arr) {
  let obj = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      duplicates.push(+key);
    }
  }

  return duplicates;
}

// console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

// findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]) should return [4, 6] because the numbers 4 and 6 appear more than once.

// findDuplicates([1, 2, 3]) should return [] because there are no duplicate numbers.

// HT: First Non-Repeating Character ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

// The function will take a string as its only parameter.
// Your goal is to find and return the first character in the string that does not repeat.
// If every character in the string repeats, or if the string is empty, the function should return null.

function firstNonRepeatingChar(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return null;
}

// console.log(firstNonRepeatingChar("aabbcc"));
// console.log(firstNonRepeatingChar("aabbcde"));

// Examples:

// firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.

// firstNonRepeatingChar("aabbcde") should return 'd' because it's the first non-repeating character.

// HT: Group Anagrams ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named groupAnagrams.

// The function will take an array of strings as its parameter.
// Your goal is to group anagrams from the given list of strings.
// An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

// Your function should return an array of arrays, where each inner array contains a group of anagram strings.

function groupAnagrams(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const chars = Array.from(arr[i]);
    chars.sort();
    const canoical = chars.join("");

    if (obj[canoical]) {
      obj[canoical].push(arr[i]);
    } else {
      obj[canoical] = [arr[i]];
    }
  }
  console.log(obj);
  return Object.values(obj);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].

// HT: Two Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function called twoSum.

// The function should accept an array of integers (nums) and an integer (target).
// Your task is to find two numbers in the array that sum up to the target integer.
// The function should return an array containing the indices of these two numbers.
//  If no such numbers exist, return an empty array.

function twoSum(arr, num) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = num - arr[i];

    if (obj.hasOwnProperty(complement)) {
      return [obj[complement], i];
    }

    obj[arr[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// Examples:

// twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

// twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.

// HT: Subarray Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function named subarraySum.

// This function should take in an array of integers (nums) and another integer (target).

// Your goal is to find a contiguous subarray whose elements sum up to the given target integer.
// The function should return an array containing the starting and ending indices of the subarray.
// If no such subarray exists, return an empty array.

function subarraySum(nums, target) {
  const sumMap = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === target) {
      return [0, i];
    }

    if (sumMap.hasOwnProperty(sum - target)) {
      console.log(sumMap);
      return [sumMap[sum - target] + 1, i];
    }
    sumMap[sum] = i;
  }

  return [];
}
console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));

// Examples:

// subarraySum([1, 4, 20, 3, 10, 5], 33) should return [2, 4] because the subarray from index 2 to index 4 sums to 33.

// subarraySum([1, 2, 3], 3) should return [0, 1] because the subarray from index 0 to index 1 sums to 3.

// Set: Remove Duplicates
// Your task is to write a function called removeDuplicates that takes a list of numbers or letters as input.

// This list can have some items that appear more than once.

// Your function should return a new list where each number or letter only appears once.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 1, 2]));
// Example

// Input: [1, 2, 2, 3, 4, 4, 4]

// Output: [1, 2, 3, 4]

// In this example, the numbers 2 and 4 appear more than once in the list.
//  The function removes the extra copies, so each number only appears one time.

// Set: Has Unique Chars ( ** Interview Question)
// Your task is to write a function named hasUniqueChars that takes a string as input.
// Your function should check if all the characters in the string are unique or not.
// In other words, no character should appear more than once in the string.
console.clear();
function hasUniqueChars(string) {
  const charSet = new Set();

  for (const ch of string) {
    if (charSet.has(ch)) {
      return false;
    }
    charSet.add(ch);
  }

  return true;
}

console.log(hasUniqueChars("hello"));

// Example

// Input: "hello"

// Output: false

// In this example, the letter 'l' appears two times in the word "hello". So, the function should return false.

// Example

// Input: "world"

// Output: true

// In this example, all the letters are unique, so the function should return true.

// Set: Find Pairs ( ** Interview Question)
// Your task is to write a function named findPairs that takes in two lists of numbers
// (arr1 and arr2) and a target number (target).

// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

// The function should return these pairs as a list.

// Example

function findPairs(arr1, arr2, target) {
  const mySet = new Set();
  const pairs = [];

  for (let i = 0; i < arr1.length; i++) {
    const num = target - arr1[i];
    if (arr2.includes(num)) {
      pairs.push([arr[i], num]);
    }
  }

  return pairs;
}
console.log(findPairs([1, 2, 3], [4, 5, 6], 7));
// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7

// Output: [[1, 6], [2, 5], [3, 4]]

// In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7.
// // So, the function returns these pairs.
// Requirements

// The function should take in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should return a list of pairs that sum up to the target.

// Notes

// The numbers in arr1 and arr2 can be in any order.

// If no pairs are found that sum up to the target, return an empty list.

// Each pair should be a list where the first number is from arr1 and the second is from arr2.

// Set: Longest Consecutive Sequence ( ** Interview Question)
// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.

// Your function should find and return the length of the longest consecutive sequence of numbers in the list.

// Example 1:

// Input: [1, 2, 3, 4, 5]

// Output: 5

// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

// Example 2:

// Input: [1, 3, 5, 2, 4]

// Output: 5

// Here, even though the numbers are not in order, they still form a consecutive sequence when arranged. So the length is 5.

// Example 3:

// Input: [2, 1, 4, 7, 3]

// Output: 4

// In this example, when arranged in order, the numbers 1, 2, 3, and 4 form a consecutive sequence. So, the length is 4.

// Example 4:

// Input: [9, 1, 3, 10, 2, 20, 21]

// Output: 2

// Here, the longest consecutive sequence is 9 and 10, or 20 and 21, both having a length of 2.

// Example 5:

// Input: [100, 4, 200, 1, 3, 2]

// Output: 4

// In this example, the longest consecutive sequence is 1, 2, 3, and 4. The length is 4.

// Example 6:

// Input: []

// Output: 0

// In this case, the list is empty. Therefore, the length of the longest consecutive sequence is 0.
