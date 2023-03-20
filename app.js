const form = document.querySelector("form");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add a new task when the form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Check if the input is empty
    if(taskInput.value != ''){
        addTask(taskInput.value);
    } else {
        alert('Enter a Task')
    }

    taskInput.value = "";
});

// Add a new task to the list
function addTask(task) {
    const newTask = document.createElement("li");
    newTask.classList.add("task");
    newTask.innerHTML = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    newTask.appendChild(deleteBtn);
    
    taskList.appendChild(newTask);
    
    // Add a click event to delete a task
    deleteBtn.addEventListener("click", (e) => {
        taskList.removeChild(newTask);
    });
}
