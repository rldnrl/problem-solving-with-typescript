import type { ISingleLinkedList } from './interface';

export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SingleLinkedList<T> implements ISingleLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length = 0;

  push(val: T) {
    const newNode = new ListNode(val);

    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail != null) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length++;
  }

  pop(): ListNode<T> | undefined {
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

  shift(): ListNode<T> | undefined {
    if (!this.head) return undefined;
    const currentHead = this.head;

    this.head = currentHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val: T) {
    const newNode = new ListNode(val);

    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  get(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentIndex++;
      currentNode = (currentNode as ListNode<T>).next
    }

    return currentNode
  }

  set(index: number, val: T): boolean {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new ListNode(val);
    const prevNode = this.get(index);
    const tempNode = (prevNode as ListNode<T>).next;
    (prevNode as ListNode<T>).next = newNode;
    newNode.next = tempNode;

    this.length++;

    return true;
  }

  remove(index: number): ListNode<T> | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const targetNode = (prevNode as ListNode<T>).next;
    (prevNode as ListNode<T>).next = (targetNode as ListNode<T>).next

    this.length--;

    return targetNode as ListNode<T>;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next: ListNode<T> | null;
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = (node as ListNode<T>).next;
      (node as ListNode<T>).next = prev
      prev = node;
      node = next;
    }

    return this
  }

  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next
    }

    console.log(arr)
  }
}
