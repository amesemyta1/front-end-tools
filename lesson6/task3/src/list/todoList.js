import { onCreateTask } from './createTask.js';
import { onListClick } from './updateTask.js';
// import { deleteTaskFunc } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  //   const deleteBtnElem = document.querySelector('.list');
  //   deleteBtnElem.addEventListener('click', deleteTaskFunc);

  const checkedElem = document.querySelector('.list');
  checkedElem.addEventListener('click', onListClick);
};
