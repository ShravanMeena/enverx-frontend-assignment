import {createStore, combineReducers} from 'redux';
import Auth from './reducers/auth';

const reducers = combineReducers({
  auth: Auth,
});

function configureStore() {
  const store = createStore(reducers);

  return store;
}

const store = configureStore();

export default store;
