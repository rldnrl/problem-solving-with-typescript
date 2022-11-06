# Array
- 배열은 값의 컬렉션을 보유할 수 있는 자료 구조입니다.
- 배열은 다양한 데이터 유형을 혼합하여 포함할 수 있습니다. `string`, `boolean`, `number` 또는 `object`를 모두 동일한 배열에 저장할 수 있습니다.
- 배열은 크기를 조정할 수 있습니다. 배열을 생성하기 전에 배열의 크기를 선언할 필요가 없습니다.
- 배열은 인덱스가 0입니다. 그리고 삽입 순서가 유지됩니다.
- 배열은 Iterable 입니다. `for...of`를 사용할 수 있습니다.

# Time Complexity
- Insert / Remove from end: O(1)
- Insert / Remove from beginning: O(n)
- Access: O(1)
- Search: O(n)
- `push` / `pop`: O(1)
- `shift` / `unshift` / `concat` / `slice` / `splice`: O(n)
- `forEach` / `map` / `filter` / `reduce`: O(n)
