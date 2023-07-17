import { all } from 'redux-saga/effects';
import { watchCreateTask, watchFetchTasks, watchUpdateTask, watchDeleteTask, watchGetTask } from './taskSagas';

export default function* rootSaga() {
  yield all([
    watchCreateTask(),
    watchFetchTasks(),
    watchUpdateTask(),
    watchDeleteTask(),
    watchGetTask(),
  ]);
}
