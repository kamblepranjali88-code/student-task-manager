function addTask(tasks, taskName, priority = "Medium") {
    if (!taskName || taskName.trim() === "") {
        throw new Error("Task name cannot be empty");
    }

    const task = {
        id: tasks.length + 1,
        name: taskName,
        priority:priority,
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