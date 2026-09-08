function validateTask(task) {
    if (task === "") {
        return false;
    }

    return true;
}

module.exports = { validateTask };