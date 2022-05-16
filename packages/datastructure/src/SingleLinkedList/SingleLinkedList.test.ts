import { SingleLinkedList } from './SingleLinkedList';

describe('SingleLinkedList', () => {
  it('should create single linked list instance', () => {
    const list = new SingleLinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});
