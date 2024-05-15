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
