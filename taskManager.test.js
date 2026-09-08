const { addTask, completeTask } = require("./taskManager");

function testAddTask() {
    const tasks = [];

    const task = addTask(tasks, "Complete Jenkins Assignment");

    if (tasks.length !== 1) {
        throw new Error("Test Failed: Task was not added");
    }

    if (task.name !== "Complete Jenkins Assignment") {
        throw new Error("Test Failed: Incorrect task name");
    }

    console.log("PASS: Add Task test");
}

function testCompleteTask() {
    const task = {
        id: 1,
        name: "Study Jenkins",
        completed: false
    };

    completeTask(task);

    if (task.completed !== true) {
        throw new Error("Test Failed: Task was not completed");
    }

    console.log("PASS: Complete Task test");
}

function testEmptyTask() {
    const tasks = [];

    try {
        addTask(tasks, "");

        throw new Error("Test Failed: Empty task was accepted");

    } catch (error) {

        if (error.message !== "Task name cannot be empty") {
            throw error;
        }

        console.log("PASS: Empty task validation test");
    }
}

testAddTask();
testCompleteTask();
testEmptyTask();

console.log("ALL TESTS PASSED");