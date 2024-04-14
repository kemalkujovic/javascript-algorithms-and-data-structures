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

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].
