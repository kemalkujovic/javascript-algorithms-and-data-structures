class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  hasLoop() {
    if (this.length < 0) return false;
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) return null;
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  partitionList(x) {
    if (this.head === null) return;
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current !== null) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = current;
      } else {
        prev2.next = current;
        prev2 = current;
      }
      current = current.next;
    }
    prev2.next = null;
    prev1.next = dummy2.next;

    this.head = dummy1.next;
  }
  removeDuplicates() {
    const values = new Set();
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (values.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        values.add(current.value);
        prev = current;
      }

      current = current.next;
    }
  }
  binaryToDecimal() {
    let num = 0;
    let current = this.head;
    while (current !== null) {
      num = num * 2 + current.value;
      current = current.next;
    }
    return num;
  }
  reverseBetween(m, n) {
    if (this.head === null) return;
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }
    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }
  bubbleSort() {
    if (this.length < 2) return;

    let sortedUntil = null;
    while (sortedUntil !== this.head.next) {
      let current = this.head;
      while (current.next !== sortedUntil) {
        let nextNode = current.next;
        if (current.value > nextNode.value) {
          const temp = current.value;
          current.value = nextNode.value;
          nextNode.value = temp;
        }
        current = current.next;
      }
      sortedUntil = current;
    }
  }

  selectionSort() {
    if (this.length < 2) return;

    let current = this.head;

    while (current.next !== null) {
      let smallest = current;
      let innerCurrent = current.next;

      while (innerCurrent !== null) {
        if (innerCurrent.value < smallest.value) {
          smallest = innerCurrent;
        }

        innerCurrent = innerCurrent.next;
      }
      if (smallest !== current) {
        const temp = current.value;
        current.value = smallest.value;
        smallest.value = temp;
      }
    }
    current = current.next;
  }

  insertionSort() {
    if (this.length < 2) {
      return;
    }

    let sortedListHead = this.head;
    let unsortedListHead = this.head.next;
    sortedListHead.next = null;

    while (unsortedListHead !== null) {
      let current = unsortedListHead;
      unsortedListHead = unsortedListHead.next;

      if (current.value < sortedListHead.value) {
        current.next = sortedListHead;
        sortedListHead = current;
      } else {
        let searchPointer = sortedListHead;
        while (
          searchPointer.next !== null &&
          current.value > searchPointer.next.value
        ) {
          searchPointer = searchPointer.next;
        }
        current.next = searchPointer.next;
        searchPointer.next = current;
      }
    }

    this.head = sortedListHead;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    this.tail = temp;
  }
  merge(otherList) {
    let otherHead = otherList.head;
    let dummy = { value: 0, next: null };
    let current = dummy;

    while (this.head !== null && otherHead !== null) {
      if (this.head.value < otherHead.value) {
        current.next = this.head;
        this.head = this.head.next;
      } else {
        current.next = otherHead;
        otherHead = otherHead.next;
      }
      current = current.next;
    }

    if (this.head !== null) {
      current.next = this.head;
    } else {
      current.next = otherHead;
      this.tail = otherList.tail;
    }

    this.head = dummy.next;
    this.length += otherList.length;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);
const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);
console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}
