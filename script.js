document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task) {
        const taskList = document.getElementById("taskList");

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = task;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteBtn);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task");
    }
}
