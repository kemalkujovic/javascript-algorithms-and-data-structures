class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    this.stackList.pop();
  }
}

function reverseString(string) {
  const stack = new Stack();
  let reversedString = "";

  for (const c of string) {
    stack.push(c);
  }

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// function isBalancedParentheses(parentheses) {
//   const stack = new Stack();
//   const arr = [];
//   for (let i = 0; i < parentheses.length; i++) {
//     const element = parentheses[i];
//     if (arr[i - 1] === element) {
//       return false;
//     } else {
//       arr.push(element);
//     }
//   }
//   return true;
// }

// function isBalancedParentheses(parentheses) {
//   const stack = new Stack();
//   for (const p of parentheses) {
//     if (p === "(") {
//       stack.push(p);
//     } else if (p === ")") {
//       if (stack.isEmpty() || stack.pop() !== "(") {
//         return false;
//       }
//     }
//   }
//   return stack.isEmpty();
// }

// console.log(isBalancedParentheses("()"));

// function reverseString(string) {
//   let newStr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newStr += string[i];
//   }

//   return newStr;
// }

// console.log(reverseString("hello"));
