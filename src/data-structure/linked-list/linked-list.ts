export class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private size = 0;

  get(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid Index");
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current!.next;
      i++;
    }

    return current!.data;
  }

  add(data: T) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  remove(data: T) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === data) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }

  contains(data: T) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  print() {
    let current = this.head;
    const array = [];
    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array.join(" -> ");
  }

  length() {
    return this.size;
  }
}
