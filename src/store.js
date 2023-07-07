import { legacy_createStore } from 'redux';
import tasksReducer from './reducers';

const store = legacy_createStore(tasksReducer);

export default store;
