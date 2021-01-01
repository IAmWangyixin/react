import { createStore } from 'redux';
import reducer from './reduces/index';

const store = createStore(reducer);

export default store;