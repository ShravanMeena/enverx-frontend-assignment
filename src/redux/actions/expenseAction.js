import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  GET_TASK_FAILURE,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "../types";


export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const createTaskRequest = (task) => ({
  type: CREATE_TASK_REQUEST,
  payload: task,
});

export const createTaskSuccess = (task) => ({
  type: CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});

export const updateTaskRequest = (task) => ({
  type: UPDATE_TASK_REQUEST,
  payload: task,
});

export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskFailure = (error) => ({
  type: UPDATE_TASK_FAILURE,
  payload: error,
});

export const deleteTaskRequest = (taskId) => ({
  type: DELETE_TASK_REQUEST,
  payload: taskId,
});

export const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId,
});

export const deleteTaskFailure = (error) => ({
  type: DELETE_TASK_FAILURE,
  payload: error,
});

export const getTaskRequest = (taskId) => ({
  type: GET_TASK_REQUEST,
  payload: taskId,
});

export const getTaskSuccess = (taskId) => ({
  type: GET_TASK_SUCCESS,
  payload: taskId,
});

export const getTaskFailure = (error) => ({
  type: GET_TASK_FAILURE,
  payload: error,
});
