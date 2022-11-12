import {LinkedListNode} from './SingleLinkedList';

export interface ISingleLinkedList<T> {
  push(val: T): void;
  pop(): LinkedListNode<T> | undefined;
  shift(): LinkedListNode<T> | undefined;
  unshift(val: T): this;
  get(index: number): LinkedListNode<T> | null;
  set(index: number, val: T): boolean;
  insert(index: number, val: T): boolean;
  remove(index: number): LinkedListNode<T> | undefined;
  reverse(): void;
  print(): void;
}
