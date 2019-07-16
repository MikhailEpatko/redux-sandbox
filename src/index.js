import {createStore, bindActionCreators} from 'redux';

// import {inc, dec, rnd} from './actions';
import * as actions from './actions';
import reducer from './reducer';


const store = createStore(reducer);

const {dispatch, subscribe} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };
//
// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);
//
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
//
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd
// }, dispatch);


const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerText = store.getState();
};

subscribe(update);
