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
  GET_TASK_SUCCESS,
  GET_TASK_REQUEST,
  GET_TASK_FAILURE,
  TASK_ALERT,
} from "../types";

const initialState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
  alertMsg: null
};

const taskReducer = (state = initialState, action) => {
  let tasksData = action.payload?.docs?.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));


  switch (action.type) {
    case FETCH_TASKS_REQUEST:
    case CREATE_TASK_REQUEST:
    case UPDATE_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
    case GET_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: tasksData,
        loading: false,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((_task) =>
          _task.id === action.payload.id ? action.payload : _task
        ),
        loading: false,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: state.tasks.filter((_task) => _task.id === action.payload),
        loading: false,
      };
    case TASK_ALERT:
      return {
        ...state,
        alertMsg:action.payload
      };
    case FETCH_TASKS_FAILURE:
    case CREATE_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
    case GET_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
