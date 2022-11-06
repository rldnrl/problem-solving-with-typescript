export type ElementType<T> = {
  [index: number]: T
}

export interface IMyArray<E extends ElementType<E>> {
  push(element: E): void;
  pop(): E;
  insertAt(element: E, index: number): E;
  deleteAt(index: number): E;
  indexOf(element: E): number;
  has(element: E): boolean;
  isEmpty(): boolean;
}
