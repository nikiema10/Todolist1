const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {

  const taskText = taskInput.value;

  const newTask = `
    <li>
      <p>${taskText}</p>
      <button class="done-button">Done</button>
      <button class="delete-button">Delete</button>
    </li>
  `;

  taskList.innerHTML += newTask;

  taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);

function deleteTask(event) {
  console.log(event);


  const clickedButton = event.target;

  
  const taskItem = clickedButton.closest('li');


  const userConfirmed = confirm('Voulez-vous vraiment supprimer cette tâche?');

  if (userConfirmed) {
      taskItem.remove();
  }
}

document.getElementById('task-list').addEventListener('click', deleteTask);




