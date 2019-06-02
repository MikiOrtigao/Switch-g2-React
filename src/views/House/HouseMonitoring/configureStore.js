import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './USRedux/US600Redux/Reducers';

export default function configureStore() {
  return createStore(
    Reducers,
    applyMiddleware(thunk)
  );
}
