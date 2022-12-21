import {ListNode} from './SingleLinkedList';

export interface ISingleLinkedList<T> {
  push(val: T): void;
  pop(): ListNode<T> | undefined;
  shift(): ListNode<T> | undefined;
  unshift(val: T): void;
  get(index: number): ListNode<T> | null;
  set(index: number, val: T): boolean;
  insert(index: number, val: T): boolean;
  remove(index: number): ListNode<T> | undefined;
  reverse(): void;
  print(): void;
}
