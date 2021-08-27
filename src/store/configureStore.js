import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

// Thunk middleware allows actions to be chained and waited on by returning
// a function from that action
// https://github.com/gaearon/redux-thunk
// import thunk from 'redux-thunk';

// Logs all actions going through redux into console
// https://github.com/evgenyrodionov/redux-logger
// import { createLogger } from 'redux-logger';

// Reducers
import rootReducer from '../reducers/rootReducer';

// http://redux.js.org/docs/advanced/Middleware.html
let middleware = [thunk];

// Use the NODE_ENV to include logging and debugging tools
// in development environment. They will be compiled out of
// the production build.
// if (process.env.NODE_ENV === 'development') {
//   console.ignoredYellowBox = ['Remote debugger'];
//   const logger = createLogger();
//   middleware.push(logger);
//   // Turns on Reactotron debugging tool
//   // require('../config/ReactotronConfig');
// } else {
middleware = [...middleware];
// }

export default function configureStore(initialState) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  /* eslint-enable */

  // const persistor = persistStore(store);
  // return { store, persistor };
  return { store };
}
