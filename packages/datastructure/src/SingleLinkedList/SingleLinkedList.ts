import { isNull } from '@typescript-coding-interview/type-guard';
import type { ISingleLinkedList } from './interface';

export class LinkedListNode<T> {
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

    if (isNull(this.head)) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (!isNull(this.tail)) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length++;
  }

  pop(): LinkedListNode<T> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(): LinkedListNode<T> | undefined {
    if (!this.head) return undefined;
    const currentHead = this.head;

    this.head = currentHead.next;

    this.length--;
    return currentHead;
  }
}
