export interface IQueue<T> {
  /**
   * Queue가 비어 있는지 확인하는 메서드
   */
  isEmpty(): boolean;
  /**
   * Queue가 꽉 차있는지 확인하는 메서드
   */
  isFull(): boolean;
  /**
   * 
   * @param newItem Queue에 Item을 추가하는 메서드
   */
  enqueue(newItem: T): void;
  /**
   * 첫 번째로 들어온 Queue를 꺼내는 메서드
   */
  dequeue(): T;
  /**
   * Queue의 맨 앞의 원소를 반환하는 메서드
   */
  peek(): T;
  /**
   * Queue의 내용을 출력하는 메서드
   */
  queueContents(): void;
}
