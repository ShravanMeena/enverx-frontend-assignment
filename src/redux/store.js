import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Auth from './reducers/auth';

const middlewares = [thunk];

const reducers = combineReducers({
  auth: Auth,
});

function configureStore() {
  const store = createStore(reducers);

  return store;
}

const store = configureStore();

export default store;
