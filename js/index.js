
//#ID names newVar
const nameInput = document.querySelector('#name');
console.log("name:  " + nameInput.value);

const descriptionInput = document.querySelector('#description');
console.log("description:  " + descriptionInput.value);

const assignInput = document.querySelector('#assign');
console.log("assign:  " + assignInput.value);

const dueDateInput = document.querySelector('#dueDate');
console.log("date:  " + dueDateInput.value);

const statusInput = document.querySelector("#status");
console.log("status:  " + statusInput.value);


//function
validFormFieldInput = (data) => {

}

// Check Name is longer than 5
if (nameInput.value.length > 5) {
    nameInput.classList.add('is-valid');
    nameInput.classList.remove('is-invalid');
} else {
    nameInput.classList.add('is-invalid');
    nameInput.classList.remove('is-valid');
}

// Check Description is longer than 5
if (descriptionInput.value.length > 5) {
    descriptionInput.classList.add('is-valid');
    descriptionInput.classList.remove('is-invalid');
} else {
    descriptionInput.classList.add('is-invalid');
    descriptionInput.classList.remove('is-valid');

}

// Check Assigned To is longer than 5
if (assignInput.value.length > 5) {
    assignInput.classList.add('is-valid');
    assignInput.classList.remove('is-invalid');
} else {
    assignInput.classList.add('is-invalid');
    assignInput.classList.remove('is-valid');
}

// Check Due Date is not empty
if (dueDateInput.value != "") {
    dueDateInput.classList.add('is-valid');
    dueDateInput.classList.remove('is-invalid');
} else {
    dueDateInput.classList.add('is-invalid');
    dueDateInput.classList.remove('is-valid');
}

// Check Status is not empty
if (statusInput.value != "") {
    statusInput.classList.add('is-valid');
    statusInput.classList.remove('is-invalid');
} else {
    statusInput.classList.add('is-invalid');
    statusInput.classList.remove('is-valid');
}

//initializing class taskManager
const newVar = new TaskManager();
newVar.addTask('brush teeth','Choacoal','Jacob','10-02-2021','completed')
newVar.addTask('shower','wash','Kev','10-02-2031','completed')
console.log(newVar.tasks);

