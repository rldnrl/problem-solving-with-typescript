import { Queue } from './Queue';

describe('Queue', () => {
  it('should create Queue Instance', () => {
    const queue = new Queue<number>(20);

    expect(queue).toBeInstanceOf(Queue);
  });

  it('enqueue test', () => {
    const queue = new Queue<number>(20);

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.peek()).toBe(3);
  });

  it('dequeue test', () => {
    const queue = new Queue<number>(20);

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.dequeue()).toBe(3);
    expect(queue.peek()).toBe(4);
  });

  it('isFull test', () => {
    const queue = new Queue<number>(5);

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.isFull()).toBe(true);
  });

  it('isEmpty test', () => {
    const queue = new Queue<number>(5);

    expect(queue.isEmpty()).toBe(true);
  });
});
