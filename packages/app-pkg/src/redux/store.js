import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';

const sagaMiddleware = createSagaMiddleware();

const historyApi = createHistory();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: historyApi,
  oldLocationChangePayload: true
});

export const store = createStore(
  combineReducers({
    router: routerReducer
    // ...reducers
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware),
  ),
);

// sagaMiddleware.run(mySaga);

export const history = createReduxHistory(store);

//history debug
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  history.listen((...args) => console.log('historyRedux', ...args));
}
