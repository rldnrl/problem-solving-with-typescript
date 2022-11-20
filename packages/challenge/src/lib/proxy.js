function MyProxy(target, handler) {
  return {
    get: handler.get
      ? (property) => handler.get(target, property)
      : (property) => target[property],
    set: handler.set
      ? handler.set
      : (property, value) => target[property] = value,
  }
}

const myObject = {
  name: 'David'
}

const handler = {
  get: (target, property) => {
    return `Your name is ${target[property]}`
  }
}

const myProxy = new MyProxy(myObject, handler)
myProxy.set('name', "paul")
const name = myProxy.get('name')

console.log({ name })
