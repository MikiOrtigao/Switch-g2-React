import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './Reducers';

export default function configureStore(initialState) {
  console.log("Store: configureStore");
  return createStore(
    Reducers,
    initialState,
    applyMiddleware(thunk)
  );
}
