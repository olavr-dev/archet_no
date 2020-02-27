// * Define UI Variables
const form = document.querySelector('#shopping-list');
const taskList = document.querySelector('.list');
const clearBtn = document.querySelector('.clear-list');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// * Load all event listeners
loadEventListeners();

// * Load all event listeners
function loadEventListeners() {
  // * DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // * Add task event
  form.addEventListener('submit', addTask);
  // * Remove task events
  taskList.addEventListener('click', removeTask);
  // * Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // * Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// * Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // * Create list element
    const li = document.createElement('li');
    // * Add class
    li.className = 'collection-item';
    // * Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // * Create link element
    const link = document.createElement('a');
    // * Add class
    link.className = 'delete-item tooltip delete-icon';
    // * Add icon html
    link.innerHTML =
      '<i class="fa fa-remove"><span class="tooltiptext">Delete Item</span></i>';
    // * Append link to the li
    li.appendChild(link);

    // * Append li to the ul
    taskList.appendChild(li);
  });
}

// * Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // * Create list element
  const li = document.createElement('li');
  // * Add class
  li.className = 'collection-item';
  // * Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // * Create link element
  const link = document.createElement('a');
  // * Add class
  link.className = 'delete-item tooltip delete-icon';
  // * Add icon html
  link.innerHTML =
    '<i class="fa fa-remove"><span class="tooltiptext">Delete Item</span></i>';
  // * Append link to the li
  li.appendChild(link);

  // * Append li to the ul
  taskList.appendChild(li);

  // * Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // // * Clear input
  taskInput.value = '';

  e.preventDefault();
}

// * Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// * Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // * Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// * Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// * Clear tasks
function clearTasks() {
  // taskList.innerHTML = ''; // Slow method. No Bueno

  // Fast method. Muy Bueno
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // * Clear from local storage
  clearTasksFromLocalStorage();
}

// * Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// * Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}
