// overlapping subproblems
// optimized substructure

const { array } = require("yargs");

let counter = 0;
// function fib(n) {
//   counter++;
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

const n = 7;

// console.log(fib(n), counter);

// Memoization

let memo = [];
// function fib(n) {
//   if (memo[n] !== undefined) {
//     return memo[n];
//   }
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   memo[n] = fib(n - 1) + fib(n - 2);
//   return memo[n];
// }

// Iterative fib function
function fib(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let index = 2; index <= n; index++) {
    fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
  }

  return fibArray[n];
}

// Array: Remove Element ( ** Interview Question)
// The removeElement function takes an array of integers (nums) and an integer value (val).

// The function's purpose is to remove all instances of val in the array nums in-place and return the new length of the array.

// In simpler terms, the function modifies the given array by shifting all elements that are not equal to val to the start of the array, and it returns the length of the array after the removal of val.

// function removeElement(nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }

//   return nums.length;
// }

// let nums = [3, 3];
// let val = 3;
// let len = removeElement(nums, val);

// function removeElement(nums, val) {
//   let i = 0;

//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];

//       i++;
//     }
//   }
//   return i;
// }
// let nums = [3, 3, 2];
// let val = 3;
// let len = removeElement(nums, val);

// Array: Find Max Min ( ** Interview Question)
// The findMaxMin function takes an array of numbers (myArray) as its input.

// The function aims to find both the maximum and minimum values present in the array.

// It returns an array containing two elements:
//  the first being the maximum value and the second being the minimum value found in myArray.

// Constraints:

// The array must contain at least one element.

// The array can contain integers or floating-point numbers.

// Do not use built-in Math.max or Math.min functions.

// You are not allowed to sort the array.

function findMaxMin(myArray) {
  let maxNumber = myArray[0];
  let minNumber = myArray[0];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minNumber) {
      minNumber = myArray[i];
    } else if (maxNumber < myArray[i]) {
      maxNumber = myArray[i];
    }
  }

  return [maxNumber, minNumber];
}

let myArray = [3, 2, 1, 4];
// let result = findMaxMin(myArray);
// console.log(result);

// Array: Find Longest String ( ** Interview Question)
// The findLongestString function aims to find the longest string from an array of strings (stringArray).

// The function returns the longest string present in the given array.

// Constraints:

// The array can be empty or contain any number of elements.

// Elements in the array must be strings.

// If there are multiple strings of the same longest length, the function returns the first one it encounters.

// Parameters:

// stringArray: An array of strings.

function findLongestString(stringArray) {
  if (stringArray.length === 0) return "";
  let longestStr = 0;
  let indexStr = 0;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestStr) {
      longestStr = stringArray[i].length;
      indexStr = i;
    }
  }
  console.log(indexStr);
  return stringArray[indexStr];
}

// let myStrings = ["", "", ""];
// let result = findLongestString(myStrings);

// console.log(result);

// Array: Remove Duplicates ( ** Interview Question)
// The removeDuplicates function aims to remove duplicates from a sorted array of integers (nums) and returns the new length of the array.

// The function modifies the input array in-place such that each element appears only once and returns the new length.

// Constraints:

// The input array is sorted in ascending order.

// The array can be empty or contain any number of elements.

// Elements in the array are integers.

// The function should not allocate extra space; it must do this by
// // modifying the input array in-place (this means you cannot use another data structure like a set).

// Parameters:

// nums: A sorted array of integers.

// function removeDuplicates(array) {
//   if (array.length === 0) return undefined;

//   let index = 0;

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] !== array[index]) {
//       index++;
//       array[index] = array[i];
//     }
//   }
//   return index + 1;
// }

// console.log(removeDuplicates([3, 3, 2]));
