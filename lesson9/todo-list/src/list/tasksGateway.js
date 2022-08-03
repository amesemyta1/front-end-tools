const baseUrl = 'https://62dacf26e56f6d82a76a312f.mockapi.io/api/v1/tasks';

const mapTasks = (tasks) => tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then(mapTasks);

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
