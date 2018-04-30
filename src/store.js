import {createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import  { browserHistory} from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

const defaultState = {

};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/',()=>{
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
};

export default store;