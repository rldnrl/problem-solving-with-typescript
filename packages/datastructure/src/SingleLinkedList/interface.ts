import {LinkedListNode} from './SingleLinkedList';

export interface ISingleLinkedList<T> {
  push(val: T): void;
  pop(): LinkedListNode<T> | undefined;
  shift(): LinkedListNode<T> | undefined;
  unshift(val: T): this;
}
