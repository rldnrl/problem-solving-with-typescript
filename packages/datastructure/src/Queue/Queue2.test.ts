import { Queue2 } from './Queue2';

describe('Queue2', () => {
  it('should create Queue2 Instance', () => {
    const queue = new Queue2<number>();

    expect(queue).toBeInstanceOf(Queue2);
  });

  it('enqueue test', () => {
    const queue = new Queue2();

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.peek()).toBe(3);
    expect(queue.size()).toBe(5)
    expect(queue.items).toStrictEqual({ 0: 3, 1: 4, 2: 5, 3: 6, 4: 7 })
  });

  it('dequeue test', () => {
    const queue = new Queue2();

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.dequeue()).toBe(3);
    expect(queue.peek()).toBe(4);
  });

  it('isEmpty test', () => {
    const queue = new Queue2();

    expect(queue.isEmpty()).toBe(true);
  });
});
