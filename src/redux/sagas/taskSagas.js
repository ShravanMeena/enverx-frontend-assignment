import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
  TASK_ALERT,
} from '../types';
import * as api from '../../api';

// Worker sagas
function* fetchTasksSaga() {
  try {
    const tasks = yield call(api.fetchTasks);
    yield put({ type: FETCH_TASKS_SUCCESS, payload: tasks });
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILURE, payload: error.message });
  }
}

function* createTaskSaga(action) {
  try {
    const task = yield call(api.createTask, action.payload);
    yield put({ type: CREATE_TASK_SUCCESS, payload: task });
    yield put({ type: TASK_ALERT, payload: "Task Created Successfully!" });
  } catch (error) {
    yield put({ type: CREATE_TASK_FAILURE, payload: error.message });
  }
}

function* updateTaskSaga(action) {
  try {
    const task = yield call(api.updateTask, action.payload);
    yield put({ type: UPDATE_TASK_SUCCESS, payload: task });
    yield put({ type: GET_TASK_SUCCESS, payload: [] });
    yield put({ type: TASK_ALERT, payload: "Task Updated Successfully!" });
  } catch (error) {
    yield put({ type: UPDATE_TASK_FAILURE, payload: error.message });
  }
}

function* deleteTaskSaga(action) {
  try {
    yield call(api.deleteTask, action.payload);
    yield put({ type: DELETE_TASK_SUCCESS, payload: action.payload });
    yield put({ type: TASK_ALERT, payload: "Task Deleted Successfully!" });
  } catch (error) {
    yield put({ type: DELETE_TASK_FAILURE, payload: error.message });
  }
}

function* getTaskSaga(action) {
  try {
    yield call(api.getTask, action.payload);
    yield put({ type: GET_TASK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: GET_TASK_FAILURE, payload: error.message });
  }
}

// Watcher sagas
export function* watchFetchTasks() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga);
}

export function* watchCreateTask() {
  yield takeLatest(CREATE_TASK_REQUEST, createTaskSaga);
}

export function* watchUpdateTask() {
  yield takeLatest(UPDATE_TASK_REQUEST, updateTaskSaga);
}

export function* watchDeleteTask() {
  yield takeLatest(DELETE_TASK_REQUEST, deleteTaskSaga);
}

export function* watchGetTask() {
  yield takeLatest(GET_TASK_REQUEST, getTaskSaga);
}
