const axios = require('axios')

const fetchTodo = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

    return response.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

const main = async () => {
  const cachedTodo = {}

  const cacheHandler = {
    get: async (target, id) => {
      if (target[id]) {
        return target[id]
      }

      const todo = await fetchTodo(id)
      target[id] = { ...todo, time: new Date() }
      return todo
    },
    has: (target, key) => {
      return key in target
    },
    set: (target, property, value) => {
      console.log(`Setting property ${property} in target`)

      return target[property] = { ...value, time: new Date() }
    }
  }


  const getTodo = new Proxy(cachedTodo, cacheHandler)

  const todo = await getTodo[1]

  console.log({ todo })

  console.log({ getTodo })

  console.log({ cachedTodo })
}

main()

