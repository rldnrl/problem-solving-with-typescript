import {ElementType, IMyArray} from "./IMyArray";

export default class MyArray<E extends ElementType<E>> implements IMyArray<E> {
  data = {} as E;
  length: number = 0;

  deleteAt(index: number): E {
    for (let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  has(element: E): boolean {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === element) {
        return true;
      }
    }

    return false;
  }

  indexOf(element: E): number {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }

    return -1;
  }

  insertAt(element: E, index: number): E {
    this.length++;
    for (let i = this.length - 1; i > index ; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = element
    return this.data;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  pop(): E {
    if (this.length === 0) {
      throw new Error('It cannot be popped because length is 0.')
    }
    const oldValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return oldValue;
  }

  push(element: E): void {
    this.data[this.length] = element;
    this.length++;
  }
}
