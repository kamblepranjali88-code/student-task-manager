function addTask(tasks, taskName,) {
    if (!taskName || taskName.trim() === "") {
        throw new Error("Task name cannot be empty");
    }

    const task = {
        id: tasks.length + 1,
        name: taskName,
        completed: false
    };

    tasks.push(task);
    return task;
}

function completeTask(task) {
    task.completed = true;
    return task;
}

module.exports = {
    addTask,
    completeTask
};