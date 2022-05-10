import { IStack } from './interface';

export class Stack<T> implements IStack<T> {
  private stack: T[];
  private length: number;
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.length = 0;
    this.maxSize = maxSize;
    this.stack = new Array<T>(maxSize);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.maxSize === this.length;
  }

  push(newItem: T): void {
    if (this.isFull()) throw new Error('Stack is overflow');
    this.stack[this.length++] = newItem;
  }

  pop(): T {
    if (this.isEmpty()) throw new Error('Stack is underflow');

    const returnValue = this.stack[--this.length];

    return returnValue;
  }

  top(): T {
    if (this.isEmpty()) throw new Error('Method not implemented.');

    return this.stack[this.length - 1];
  }

  stackContents(): void {
    console.log('Stack Contents');
    this.stack.forEach((element, index) => {
      console.log(`stack[${index}]: ${element}`);
    });
  }
}
