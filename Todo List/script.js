const button = document.getElementById('button');
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggle when deleting
    li.remove();
  });

  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = ''; // clear input
}
button.addEventListener('click', ()=>{
    addTask()
    console.log("task added")
})