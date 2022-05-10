export interface IStack<T> {
  /**
   * Stack 비어있는지 확인합니다.
   */
  isEmpty(): boolean;
  /**
   * Stack이 꽉 차 있는지 확인합니다.
   */
  isFull(): boolean;
  /**
   *
   * @param newItem
   * Stack에 newItem을 추가하는 메서드
   */
  push(newItem: T): void;
  /**
   * Stack에서 맨 뒤의 원소를 빼는 메서드
   * @returns T
   */
  pop(): T;
  /**
   * Stack에서 맨 뒤의 원소를 출력하는 메서드
   * @returns T
   */
  top(): T;
}
