const TaskManager = require('./taskManager');

describe('TaskManager', () => {
    let taskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    test('should add a new task', () => {
        const task = taskManager.addTask('Test Task', '2025-01-10');
        expect(task).toHaveProperty('id');
        expect(task.description).toBe('Test Task');
        expect(task.dueDate).toBe('2025-01-10');
        expect(task.completed).toBe(false);
    });

    test('should mark a task as complete', () => {
        const task = taskManager.addTask('Complete Task', '2025-01-15');
        const updatedTask = taskManager.markTaskComplete(task.id);
        expect(updatedTask.completed).toBe(true);
    });

    test('should list tasks with filtering', () => {
        const task1 = taskManager.addTask('Task 1', '2025-01-10');
        const task2 = taskManager.addTask('Task 2', '2025-01-11');
        taskManager.markTaskComplete(task1.id);

        const completedTasks = taskManager.listTasks('completed');
        const pendingTasks = taskManager.listTasks('pending');

        expect(completedTasks).toEqual([task1]);
        expect(pendingTasks).toEqual([task2]);
    });

    test('should delete a task by ID', () => {
        const task = taskManager.addTask('Task to Delete', '2025-01-10');
        const deletedTask = taskManager.deleteTask(task.id);
        expect(deletedTask).toEqual(task);
        expect(taskManager.tasks.length).toBe(0);
    });

    test('should throw error for invalid operations', () => {
        expect(() => taskManager.markTaskComplete(999)).toThrow('Task with ID 999 does not exist.');
        expect(() => taskManager.deleteTask(999)).toThrow('Task with ID 999 does not exist.');
    });
});
