const set = new Set([1, 2, 3])

set.add(4)
console.log(set.has(4)) // true

set.delete(2)
console.log(set.has(2)) // false
console.log(set.size) // 3

set.clear()
console.log(set)

for (const item of set) {
  console.log(item)
}
