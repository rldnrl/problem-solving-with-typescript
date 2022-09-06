const user = {
  name: 'Heisenberg',
  age: 25,
  'key-tree': true,
  getLogName: function () {
    console.log(this.name)
  }
}

user.hobby = 'football'

console.log(user)

console.log(user.name)
console.log(user['name'])

console.log(user.age)
console.log(user['age'])

console.log(user['key-tree'])

user.getLogName()

/**
 * Object.keys, Object.values, Object.entries
 */
