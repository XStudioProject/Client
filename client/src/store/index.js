import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import RootReducer from 'reducers/RootReducer';

const middleware = [thunk];

const store = createStore(
  RootReducer,
  compose(applyMiddleware(...middleware), composeWithDevTools()),
);

export default store;
