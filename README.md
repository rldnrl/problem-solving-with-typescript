# TypeScript로 준비하는 코딩 인터뷰

## Leet Code

## Hacker Rank

## Datastructure Tip
### `Map`
- `Map`에서 `Value`를 기준으로 정렬하기
  - 배열로 변환 후 정렬을 시도한다.
  ```javascript
  const map = new Map()
  map.set([1, 3])
  map.set([2, 4])
  map.set([3, 1])
  
  const arrayByMap = [...map.entries()]
  
  // 내림차순 정렬
  arrayByMap.sort((a, b) => b[1] - a[1])
  
  // 오름차순 정렬
  arrayByMap.sort((a, b) => a[1] - b[1])
  ```

- `Map`에서 `get`이 반환하는 타입은 `undefined`가 포함되어 있어서 주의해야한다. 따라서 기본값을 설정해주는 것이 좋다.
  ```javascript
  const map = new Map();
  
  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  ```

### `Array`
- 배열을 초기화 하는 방법
  ```javascript
  const N = 200;
  const array = Array.from({ length: 300 }).fill(0); // 300개의 원소를 가진 배열이 생성된다.
  const _2Darray = Array.from({ length: 300 }).fill([]); // 300개의 2차원 배열이 생성된다.
  ```
