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

}

// export this class here
module.exports = taskManager;
