
// Initialize first Task Manager
const firstTaskManager = new TaskManager();

// Load in tasks and currentId from local storage
firstTaskManager.load();
firstTaskManager.render();

// Declare variables for input IDs
const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const assignInput = document.querySelector('#assign');
const dueDateInput = document.querySelector('#dueDate');
const statusInput = document.querySelector("#status");
const cancel = document.querySelector('#cancel')

// Declare variable for Submit Button
const submitButton = document.querySelector("#submit")

// Function to check Name is longer than 5
const checkNameInput = () => {
  if (nameInput.value.length > 5) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    submitButton.setAttribute('data-dismiss', 'modal')
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
    submitButton.setAttribute('data-dismiss', 'modal')
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
    submitButton.setAttribute('data-dismiss', 'modal')
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
    submitButton.setAttribute('data-dismiss', 'modal')
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
    submitButton.setAttribute('data-dismiss', 'modal')
  } else {
    statusInput.classList.add("is-invalid");
    statusInput.classList.remove("is-valid");
  }
}
// Listen for Status input value to change, and run function to check if valid
statusInput.addEventListener("change", checkStatusInput);



// This function is called when the submit button is pressed
const checkValidity = () => {
  if (
    nameInput.classList.contains("is-valid") &&
    descriptionInput.classList.contains("is-valid") &&
    assignInput.classList.contains("is-valid") &&
    dueDateInput.classList.contains("is-valid") &&
    statusInput.classList.contains("is-valid")) {

    // If user inputs are valid then remove dismiss-data attribute and button should work
    submitButton.removeAttribute('dismiss-data')

    firstTaskManager.addTask(
      nameInput.value,
      descriptionInput.value,
      assignInput.value,
      dueDateInput.value,
      statusInput.value
    );

//Save user input as soon as form id validated and task is added to the Task Manager class.
    firstTaskManager.save();
    firstTaskManager.render();
    
    // Reset all input values to empty
    nameInput.value = "";
    descriptionInput.value = "";
    assignInput.value = "";
    dueDateInput.value = "";
    statusInput.value = "TO DO";



    //Removes the is-valid class after the user input has been validated

    nameInput.classList.remove("is-valid")
    descriptionInput.classList.remove("is-valid")
    assignInput.classList.remove("is-valid")
    dueDateInput.classList.remove("is-valid")
    statusInput.classList.remove("is-valid")


    submitButton.setAttribute('data-dismiss', 'modal')


  } else {
    // If user does not fill the form correctly then we remove data dissmiss from button
    // Button stops working.
    submitButton.removeAttribute('data-dismiss')

    // console.log("Form value(s) not valid");
  }
};

// Listener to check when the submit button is pressed
submitButton.addEventListener("click", checkValidity)
cancel.addEventListener('click', () => {

  // Clear all inputs  after user input
  nameInput.value = '';
  descriptionInput.value = '';
  assignInput.value = '';
  dueDateInput.value = '';
  statusInput.value = '';

  //Set data dismiss attribute when task details is validated

  submitButton.setAttribute('data-dismiss', 'modal')

  nameInput.classList.remove("is-valid")
  descriptionInput.classList.remove("is-valid")
  assignInput.classList.remove("is-valid")
  dueDateInput.classList.remove("is-valid")
  statusInput.classList.remove("is-valid")

  nameInput.classList.remove("is-invalid")
  descriptionInput.classList.remove("is-invalid")
  assignInput.classList.remove("is-invalid")
  dueDateInput.classList.remove("is-invalid")
  statusInput.classList.remove("is-invalid")

})

const taskList = document.querySelector('#task-list')
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    const task = firstTaskManager.getTaskById(taskId);
    console.log(task);
    task.status = 'DONE';
    firstTaskManager.save();
    firstTaskManager.render();
  }

})

//validFormFieldInput = (data) => {}

