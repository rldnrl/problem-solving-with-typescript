import {IDoublyLinkedList} from "./interface";

export class ListNode<T> {
  val: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length = 0;

  push(val: T): this {
    const newNode = new ListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }

    this.length++;

    return this;
  }

  pop(): ListNode<T> | undefined {
    if (!this.head) return undefined;

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }

    this.length--;

    return poppedNode as ListNode<T>
  }
}
