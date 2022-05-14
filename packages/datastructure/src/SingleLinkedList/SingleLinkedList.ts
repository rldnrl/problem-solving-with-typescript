import type { ISingleLinkedList } from './interface';

class LinkedListNode<T> {
  val: T;
  next: LinkedListNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SingleLinkedList<T> implements ISingleLinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  length = 0;

  push(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
  }
}
