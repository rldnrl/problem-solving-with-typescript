import {ListNode} from "./DoublyLinkedList";

export interface IDoublyLinkedList<T> {
  push(val: T): this;
  pop(): ListNode<T> | undefined
}
