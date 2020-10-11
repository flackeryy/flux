import { createStore } from './createStore.js'
import rootReducer from './redux/rootReducer.js'
import { increment, decrement } from './redux/actions.js'

const incrementHTMLButton = document.getElementById('inc')
const decrementHTMLButton = document.getElementById('dec')

incrementHTMLButton.addEventListener('click', () => {
  store.dispatch(increment())
})
decrementHTMLButton.addEventListener('click', () => {
  store.dispatch(decrement())
})

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))
