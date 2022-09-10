export class Queue3<T> {
  items = new Map<number, T>()
  rear = 0
  front = 0

  enqueue(newItem: T): void {
    this.items.set(this.rear, newItem)
    this.rear++
  }

  dequeue(): T {
    const item = this.items.get(this.front) as T
    this.items.delete(this.front)
    this.front++

    return item
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0
  }

  peek(): T {
    return this.items.get(this.front) as T
  }

  size(): number {
    return this.rear
  }

  queueContents(): void {
    console.log(this.items)
  }
}
