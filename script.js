// Add Task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create Task Element
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");

        let taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskText;
        
        // Add task actions (Mark Complete, Delete)
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            taskElement.classList.toggle("completed");
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskElement.remove();
        };

        // Append everything
        taskElement.appendChild(taskParagraph);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
        
        // Add task to the task list
        document.getElementById("taskList").appendChild(taskElement);
        
        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
// Add Task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create Task Element
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");

        let taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskText;

        // Add task actions (Mark Complete, Delete)
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            markAsCompleted(taskElement, taskText);
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskElement.remove();
        };

        // Append everything to task element
        taskElement.appendChild(taskParagraph);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        // Add task to the task list
        document.getElementById("taskList").appendChild(taskElement);

        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Mark Task as Completed
function markAsCompleted(taskElement, taskText) {
    // Hide the task element
    taskElement.style.display = "none";
    
    // Create a new completed message div
    let completedMessage = document.createElement("div");
    completedMessage.classList.add("completed-message");
    completedMessage.innerHTML = `<p>Task "${taskText}" has been completed!</p>`;

    // Append the completed message to the task list
    document.getElementById("taskList").appendChild(completedMessage);
}
