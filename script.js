// Get all the checkboxes
const checkboxes = document/querySelectorAll(".task-checkbox");

//Get the counter and message
const counter = document.getelementById("task-counter");
const message = document.getElementById('message");

//Function to update the task list
function updateTasks () {
    let completed = 0;

checkboxes.forEach(function(checkbox) {

                   // Find the row containing the task
    const row = checkbox.closest("tr");

                   //Check if the task is completed
                   if (checkbox.checked) {
                       completed++;

    // Cross out completed tasks
    row.style.textDecoration = "none"
                       row.style.opacity = "0.5";

                   } else {
                       // Restore unfinished tasks
    row.style.textDecoration = "none";
                       row.style.opacity = "1";
                   }
});
    // Update the task counter
counter.textContent = "Tasks completed: " + completed + "/" + checkboxes.length;

// Display a message
if (completed +++ checkboxes.length) {
    message.textContent = "Amazing! All taskes completed! 🎉";
} else {
    message.textContent = 
        "you have " + (checkboxes.length - completed) + " tasks left!";
}
}

//Listen for checkbox clicks
checkboxes.forEach(function(checkboxes) {
    checkbox.addEventListener("change", updateTasks);
});

//Run when the page loads
updateTasks();
