// Get references to the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    // If it's empty, show an alert message
    alert("You must add a task!");
  } else {
    // If it's not empty, create a new list item
    let listItem = document.createElement("li");
    // Set the text of the list item to the value of the input box
    listItem.textContent = inputBox.value;
    // Append the list item to the list container
    listContainer.appendChild(listItem);
    // Create a close button
    let closeButton = document.createElement("span");
    // Set the text of the close button to '×'
    closeButton.textContent = "×";
    // Append the close button to the list item
    listItem.appendChild(closeButton);
  }
  // Clear the input box after adding a task
  inputBox.value = "";
  // Save the updated task list
  saveTasks();
}

// Function to handle clicking on a task or its close button
function handleListContainerClick(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {
    // Toggle the 'checked' class to mark the task as completed or incomplete
    event.target.classList.toggle("checked");
    // Save the updated task list
    saveTasks();
  } else if (event.target.tagName === "SPAN") {
    // If the clicked element is a close button, remove the task from the list
    event.target.parentElement.remove();
    // Save the updated task list
    saveTasks();
  }
}

// Add event listener to the list container
listContainer.addEventListener("click", handleListContainerClick);

// Function to save tasks to localStorage
function saveTasks() {
  // Store the HTML content of the list container in localStorage
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to show tasks from localStorage
function showTasks() {
  // Retrieve the saved tasks from localStorage
  let savedTasks = localStorage.getItem("tasks");
  // If there are saved tasks, display them in the list container
  if (savedTasks) {
    listContainer.innerHTML = savedTasks;
  }
}

showTasks();
