import {createStore} from "redux"

const reducer = (state = 0, action) => {
  switch( action.type) {
    case 'INC' :
      return state + 1;
    case 'DEC' :
      return state - 1;
    default :
      return state
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(`getState ->`,store.getState())  
})

document.getElementById('inc').addEventListener('click',() => {
  store.dispatch({type: 'INC'})
})
document.getElementById('dec').addEventListener('click',() => {
  store.dispatch({type: 'DEC'})
})

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})