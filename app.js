// Select DOM elements
const addButton = document.getElementById("add-task-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to create a new task item
function createTodoItem(taskText) {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // "Complete" button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-btn");
    completeButton.addEventListener("click", () => {
        span.style.textDecoration = "line-through"; // Mark as completed
        completeButton.disabled = true; // Disable the "Complete" button
    });
    li.appendChild(completeButton);

    // "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        li.remove(); // Remove the task item
    });
    li.appendChild(deleteButton);

    // Add the new task to the list
    todoList.appendChild(li);
}

// Event listener to add a new task when the button is clicked
addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        createTodoItem(taskText);
        todoInput.value = ""; // Clear input field after adding the task
    }
});

// Optional: Allow pressing "Enter" to add a task
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});
