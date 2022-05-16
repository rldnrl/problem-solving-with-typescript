import { LinkedListNode } from './SingleLinkedList';

export interface ISingleLinkedList<T> {
  push(val: T): void;
  pop(): LinkedListNode<T> | undefined;
}
