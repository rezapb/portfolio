import { createStore, applyMiddleware } from 'redux';

import AllReducers from './../reducers/combiner';

const Store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
