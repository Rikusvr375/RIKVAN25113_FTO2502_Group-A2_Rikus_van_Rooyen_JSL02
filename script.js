document.addEventListener("DOMContentLoaded", function () {
    const validStatus = ["todo", "doing", "done"];

    // Function to ask for one task's information
    function getTask(taskNumber) {
        let title = "";
        while (!title) {
            title = prompt(`Enter title for Task ${taskNumber}:`);
        }

        let description = "";
        while (!description) {
            description = prompt(`Enter description for Task ${taskNumber}:`);
        }

        let status = "";
        while (!validStatus.includes(status.toLowerCase())) {
            status = prompt(`Enter status for Task ${taskNumber} 'todo', 'doing', or 'done'`);
            if (!validStatus.includes(status.toLowerCase())) {
                alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
            }
        }

        return {
            title,
            description,
            status: status.toLowerCase()
        };
    }

    
    const task1 = getTask(1);
    const task2 = getTask(2);

    // Store tasks for future use
    const tasks = [task1, task2];

    // Search for completed tasks marked as "done"
    const completedTasks = tasks.filter(task => task.status === "done");

    let anyDone = false;
    tasks.forEach((task, index) => {
        if (task.status === "done") {
            console.log(`Title: "Task ${index + 1}", Status: "done"`);
            anyDone = true;
        }
    });

    if (!anyDone) {
        console.log("No tasks completed, let's get to work!");
    }
});