# TypeScript로 준비하는 코딩 인터뷰

## Leet Code

## Hacker Rank

## 자료구조 Tip
- `Map`에서 `Value`를 기준으로 정렬하기
  - 배열로 변환한다.
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
