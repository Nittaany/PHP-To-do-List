<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>My To-Do List</h1>
            <input type="text" id="taskInput" placeholder="Add a new task...">
            <button onclick="addTask()">Add Task</button>
        </div>
        
        <div class="task-list" id="taskList">
            <!-- Tasks will be dynamically added here -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
