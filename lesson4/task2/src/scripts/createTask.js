import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const listElem = document.querySelector('.list');
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createData: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      listElem.innerHTML = '';
      renderTasks();
    });
};
