export function createStore (rootReducer) {
  let store = rootReducer(undefined, { type: '@@INIT' })
  const subscribers = []

  return {
    dispatch (action) {
      store = rootReducer(store, action)
      subscribers.forEach(sub => sub())
    },
    subscribe (callback) {
      subscribers.push(callback)
    },
    getState () {
      return store
    }
  }
}
