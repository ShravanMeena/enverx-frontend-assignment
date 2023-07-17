import {createStore, combineReducers, applyMiddleware} from 'redux';
import expenseReducer from './reducers/expenseReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  expenseReducer,
});

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
