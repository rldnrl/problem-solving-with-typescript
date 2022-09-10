import { QueueItems } from "./interface";

export class Queue2<T> {
  items: QueueItems = {}
  rear = 0
  front = 0

  enqueue(newItem: T): void {
    this.items[this.rear] = newItem
    this.rear++
  }

  dequeue(): T {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++

    return item
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0
  }

  peek(): T {
    return this.items[this.front]
  }

  size(): number {
    return this.rear
  }

  queueContents(): void {
    console.log(this.items)
  }
}
