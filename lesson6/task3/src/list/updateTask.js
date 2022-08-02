import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onListClick = e => {
  const listElem = document.querySelector('.list');

  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  if (e.target.classList.contains('list__item-checkbox')) {
    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        listElem.innerHTML = '';
        renderTasks();
      });
  }

  if (e.target.classList.contains('list__item-delete-btn')) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        listElem.innerHTML = '';
        renderTasks();
      });
  }

  console.log(e.target);
};
