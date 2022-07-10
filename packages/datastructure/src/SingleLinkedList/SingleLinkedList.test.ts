import { LinkedListNode, SingleLinkedList } from './SingleLinkedList';

describe('SingleLinkedList', () => {
  it('should create single linked list instance', () => {
    const list = new SingleLinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should push', () => {
    const list = new SingleLinkedList<number>();

    list.push(12);
    list.push(13);
    list.push(15);
    list.push(20);
    list.push(25);

    let current = list.head as LinkedListNode<number>;
    console.log(current);

    while (current && current.next) {
      console.log(current);
      current = current.next;
    }
  });
});
