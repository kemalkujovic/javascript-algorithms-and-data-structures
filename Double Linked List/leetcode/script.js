class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
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

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  swapFirstLast() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;

    let first = this.head;
    let last = this.tail;
    this.head = last;
    this.tail = first;

    this.tail.next = null;
    this.tail.prev = last.prev;

    this.head.prev = null;
    this.head.next = first.next;

    return this;
  }
  //   swapFirstLast() {
  //     if (this.length < 2) return;
  //     const temp = this.head.value;
  //     this.head.value = this.tail.value;
  //     this.tail.value = temp;
  //   }
  reverse() {
    if (this.length < 2) return;
    let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }

  isPalindrome() {
    if (this.length <= 1) return;
    let forwardNode = this.head;
    let backwardNode = this.tail;

    for (let i = 0; i < this.length / 2; i++) {
      if (forwardNode.value !== backwardNode.value) return false;
      forwardNode = forwardNode.next;
      backwardNode = backwardNode.prev;
    }
    return true;
  }
  swapPairs() {
    let nextNode = this.head.next;
    let temp = this.head;

    while (nextNode !== null) {
      temp.next = nextNode;
      nextNode.prev = temp;
    }

    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapFirstLast();
console.log("\nList after swapping first and last elements:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

// myDoublyLinkedList2.swapFirstLast();
console.log("\nList 2 after swapping first and last elements:");
myDoublyLinkedList2.printList();
console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after swapping first and last elements:
    5
    2
    3
    4
    1
    Original list 2:
    1
    2
    3
    4
    5
    6
    List 2 after swapping first and last elements:
    6
    2
    3
    4
    5
    1
*/
