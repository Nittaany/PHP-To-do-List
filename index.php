<?php
session_start();


if (!isset($_SESSION['tasks'])) {
    $_SESSION['tasks'] = [];
}


if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['task'])) {
    $task = htmlspecialchars($_POST['task']);
    $_SESSION['tasks'][] = $task;
}


if (isset($_GET['delete'])) {
    $index = $_GET['delete'];
    unset($_SESSION['tasks'][$index]);
    $_SESSION['tasks'] = array_values($_SESSION['tasks']); 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Simple To-Do List</title>
    <style>
        
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <form method="POST" action="">
        <input type="text" name="task" placeholder="Enter a new task" required>
        <button type="submit">Add Task</button>
    </form>
    <ul>
        <?php foreach ($_SESSION['tasks'] as $index => $task): ?>
            <li>
                <?php echo htmlspecialchars($task); ?>
                <a href="?delete=<?php echo $index; ?>">Delete</a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
