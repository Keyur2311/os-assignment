const TaskManager = require('./taskManager');

// Initialize TaskManager
const taskManager = new TaskManager();

// Helper function to display tasks
const displayTasks = (tasks, message = '') => {
    console.log(`\n${message}`);
    tasks.forEach(task => {
        console.log(
            `ID: ${task.id}, Description: "${task.description}", Due Date: ${task.dueDate}, Completed: ${task.completed}`
        );
    });
    console.log('---');
};

// Create tasks
const task1 = taskManager.addTask('Complete assignment', '01-01-2025');
const task2 = taskManager.addTask('Prepare for interview', '02-01-2025');
const task3 = taskManager.addTask('Attend meeting', '03-01-2025');

// Display all tasks
displayTasks(taskManager.listTasks(), 'All Tasks:');

// Mark a task as complete
taskManager.markTaskComplete(task2.id);
console.log(`\nTask "${task2.description}" marked as completed.`);

// Display completed tasks
displayTasks(taskManager.listTasks('completed'), 'Completed Tasks:');

// Display pending tasks
displayTasks(taskManager.listTasks('pending'), 'Pending Tasks:');

// Delete a task
const deletedTask = taskManager.deleteTask(task1.id);
console.log(`\nTask "${deletedTask.description}" deleted.`);

// Display all tasks after deletion
displayTasks(taskManager.listTasks(), 'All Tasks After Deletion:');
