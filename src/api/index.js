import expenseService from "../firebase/service/expense.service";

export const fetchTasks = () => {
  return new Promise((resolve, reject) => {
    const res = expenseService.getAllExpense();
    resolve(res);
  });
};

export const createTask = (task) => {
  return new Promise((resolve, reject) => {
    const newTask = { ...task };
    expenseService.addExpense(newTask);
    resolve(newTask);
  });
};

export const updateTask = (task) => {
  return new Promise((resolve, reject) => {
    expenseService.updateExpense(task);
    resolve(task);
  });
};

export const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    expenseService.deleteExpense(taskId);
    resolve(taskId);
  });
};

export const getTask = (taskId) => {
  return new Promise((resolve, reject) => {
    expenseService.getExpense(taskId);
    resolve(taskId);
  });
};
