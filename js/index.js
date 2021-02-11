
// Initialize first Task Manager
const firstTaskManager = new TaskManager();

// Declare variables for input IDs
const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const assignInput = document.querySelector('#assign');
const dueDateInput = document.querySelector('#dueDate');
const statusInput = document.querySelector("#status");

// Declare variable for Submit Button
const submitButton = document.querySelector("#submit")

// Function to check Name is longer than 5
const checkNameInput = () => {
    if (nameInput.value.length > 5) {
      nameInput.classList.add("is-valid");
      nameInput.classList.remove("is-invalid");
    } else {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
    }
}
// Listen for Name input value to change, and run function to check if valid
nameInput.addEventListener("change", checkNameInput);

// Function to check Description is longer than 5
const checkDescriptionInput = () => {
    if (descriptionInput.value.length > 5) {
      descriptionInput.classList.add("is-valid");
      descriptionInput.classList.remove("is-invalid");
    } else {
      descriptionInput.classList.add("is-invalid");
      descriptionInput.classList.remove("is-valid");
    }
}
// Listen for Description input value to change, and run function to check if valid
descriptionInput.addEventListener("change", checkDescriptionInput);

// Function to check Assigned To is longer than 5
const checkAssignInput = () => {
    if (assignInput.value.length > 5) {
      assignInput.classList.add("is-valid");
      assignInput.classList.remove("is-invalid");
    } else {
      assignInput.classList.add("is-invalid");
      assignInput.classList.remove("is-valid");
    }
}
// Listen for Assigned To input value to change, and run function to check if valid
assignInput.addEventListener("change", checkAssignInput);

// Function to check Due Date is not empty
const checkDueDateInput = () => {
    if (dueDateInput.value != "") {
      dueDateInput.classList.add("is-valid");
      dueDateInput.classList.remove("is-invalid");
    } else {
      dueDateInput.classList.add("is-invalid");
      dueDateInput.classList.remove("is-valid");
    }
}
// Listen for Due Date input value to change, and run function to check if valid
dueDateInput.addEventListener("change", checkDueDateInput);


// Function to check Status is not empty
const checkStatusInput = () => {
    if (statusInput.value != "") {
      statusInput.classList.add("is-valid");
      statusInput.classList.remove("is-invalid");
    } else {
      statusInput.classList.add("is-invalid");
      statusInput.classList.remove("is-valid");
    }
}
// Listen for Status input value to change, and run function to check if valid
statusInput.addEventListener("change", checkStatusInput);

// Check all inputs as soon as the page is loaded
checkNameInput();
checkDescriptionInput();
checkAssignInput();
checkDueDateInput();
checkStatusInput();

// This function is called when the submit button is pressed
const checkValidity = () => {
  if (
    nameInput.classList.contains("is-valid") &&
    descriptionInput.classList.contains("is-valid") &&
    assignInput.classList.contains("is-valid") &&
    dueDateInput.classList.contains("is-valid") &&
    statusInput.classList.contains("is-valid")
  ) {
    firstTaskManager.addTask(
      nameInput.value,
      descriptionInput.value,
      assignInput.value,
      dueDateInput.value,
      statusInput.value
    );
    firstTaskManager.render();
    // Reset all input values to empty
    nameInput.value = "";
    descriptionInput.value = "";
    assignInput.value = "";
    dueDateInput.value = "";
    statusInput.value = "TO DO";
    // Check all input values after clearing to empty
    checkNameInput();
    checkDescriptionInput();
    checkAssignInput();
    checkDueDateInput();
    checkStatusInput();

  } else {
    console.log("Form value(s) not valid");
  }
};

// Listener to check when the submit button is pressed
submitButton.addEventListener("click", checkValidity)

//initializing class taskManager

// firstTaskManager.addTask(
//   "brush teeth",
//   "Choacoal",
//   "Jacob",
//   "10-02-2021",
//   "completed"
// );
// firstTaskManager.addTask("shower", "wash", "Kev", "10-02-2031", "completed");
// console.log(firstTaskManager.tasks);

// function

const taskList = document.querySelector('#task-list')
taskList.addEventListener('click',(event)=>{
  if(event.target.classList.contains('done-button')){
    const parentTask = 
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log(parentTask);
    // const taskId = Number(parentTask.dataset.taskId);
    // const task = TaskManager.getTaskById(taskId);
    // task.status = "Done";
  }
})

validFormFieldInput = (data) => {

}

