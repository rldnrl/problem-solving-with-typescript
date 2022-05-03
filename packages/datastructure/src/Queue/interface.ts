export interface IQueue<T> {
  isEmpty(): boolean;
  isFull(): boolean;
  enqueue(newItem: T): void;
  dequeue(): T;
  peek(): T;
  queueContents(): void;
}
