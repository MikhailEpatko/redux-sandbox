import {createStore} from 'redux';


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('now:', store.getState());
});

console.log('initial: ', store.getState());

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});