
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
    console.log('name longer')
}

// Check Description is longer than 5
if (descriptionInput.value.length > 5) {
    console.log("desc longer");
}

// Check Assigned To is longer than 5
if (assignInput.value.length > 5) {
    console.log("assigned longer");
}

// Check Due Date is not empty
if (dueDateInput.value != "") {
    console.log("date not empty");
}

// Check Status is not empty
if (statusInput.value != "") {
    console.log("status not empty");
}