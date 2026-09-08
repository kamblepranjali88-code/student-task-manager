const { validateTask } = require("./validation");

function testValidTask() {
    if (validateTask("Study Jenkins") !== true) {
        throw new Error("Test Failed: Valid task was rejected");
    }

    console.log("PASS: Valid Task test");
}

function testEmptyTask() {
    if (validateTask("") !== false) {
        throw new Error("Test Failed: Empty task was accepted");
    }

    console.log("PASS: Empty Task test");
}

testValidTask();
testEmptyTask();

console.log("ALL TESTS PASSED");