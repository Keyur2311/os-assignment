class taskManager {
    constructor() {
        this.tasks = [];    // Array to store tasks
        this.currentId = 0; // Counter for auto-incremented IDs
    }

    // Function For Add a new task
    addTask(description, dueDate) {
        if (!description || !dueDate) {
            throw new Error('Description and due date are required to add a task.');
        }

        const newTask = {
            id: ++this.currentId,  // Auto-incremented ID
            description,
            dueDate,
            completed: false,      // Default completion status
        };

        this.tasks.push(newTask);
        return newTask;
    }

    // Function For Mark a task as completed
    markTaskComplete(taskId) {
        const task = this.tasks.find((t) => t.id === Number(taskId));
        if (!task) {
            throw new Error(`Task with ID ${taskId} does not exist.`);
        }

        task.completed = true;
        return task;
    }

    // Function for delete a task
    deleteTask(taskId) {
        const taskIndex = this.tasks.findIndex((t) => t.id === Number(taskId));
        if (taskIndex === -1) {
            throw new Error(`Task with ID ${taskId} does not exist.`);
        }

        const [deletedTask] = this.tasks.splice(taskIndex, 1);
        return deletedTask;
    }


}

// export this class here
module.exports = taskManager;
