import { renderTasks } from './render.js';
import { deleteTask, getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

export const deleteTaskFunc = e => {
  const listElem = document.querySelector('.list');
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      listElem.innerHTML = '';
      renderTasks();
    });
};

// algo
// 1. select delete item
// 2. add a delete function to the button
// 3. update the list
