class TaskManager {
  constructor(currentId) {
    this.tasks = []
    this.currentId = 0;
  }
  addTask(name, description, assignedTo, dueDate, status) {

    const newTask = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    }
    this.tasks.push(newTask);
    this.currentId++;
  }


  createTaskHtml(name, description, assignedTo, dueDate, status, id) {
    let doneButtonClass = ''
    if(status === 'DONE'){
      doneButtonClass = 'd-none'
    }
    const html = `
  <li data-task-id="${id}">     
    <div class="row m-2">
      <!--This column contains the CARD for the sample task-->
      <div class="col-12">
        <div class="card-header" style="text-align:left;">
          ${name}
        </div>
        <div class="card-body" style="text-align: left;">
          <p class="card-text ">${description}</p>
        </div>
        <div class="card-footer text-muted row px-0 mx-0">
          <div class="col-md-7 d-flex align-items-center justify-content-between">
            <span class="mr-4">Assigned to: <br class="d-md-none"/> ${assignedTo}</span>
            <span class="mr-4">Date: <br class="d-md-none"/> ${dueDate}</span>
            <span class="">Status:<br class="d-lg-none"/> ${status}</span>
          </div>
          <div class="col-md-5 d-none justify-content-end d-sm-flex align-items-center">
            <a href="#" class="btn btn-success done-button ${doneButtonClass}">Done</a>
            <a href="#" class="btn btn-danger ml-1 delete-button">Delete</a>
          </div>
          <div class="col-12 d-flex justify-content-end d-sm-none p-2">
            <a href="#" class="btn btn-success done-button ${doneButtonClass}">Done</a>
            <a href="#" class="btn btn-danger ml-1 delete-button">Delete</a>
          </div>
       </div>
      </div>
    </div>
  </li>`;
    return html;
  }

  render() {
    const tasksHtmlList = [];
    this.tasks.forEach((element) => {
      const date = new Date(element.dueDate);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      const taskHtml = this.createTaskHtml(element.name, element.description, element.assignedTo, formattedDate, element.status, element.id)
      tasksHtmlList.push(taskHtml);
    })

    const tasksHtml = tasksHtmlList.join("\n")
    if(tasksHtmlList.length){
      document.querySelector('#task-list').innerHTML = tasksHtml
      console.log(tasksHtmlList.length);
    }else{
      document.querySelector('#task-list').innerHTML = '<div class="d-flex justify-content-center p-5"><img src="./image.svg"width ="320px"></div>'
    }
  };

  getTaskById(taskId) {
    let foundTask;
    this.tasks.forEach((item) => {
      let task = item;
      if (task.id === taskId) {
        foundTask = task;

      }
    })

    return foundTask;
  }

  save() {
    // Create a JSON string of the tasks
    let tasksJson = JSON.stringify(this.tasks);

    // Add the JSON string to the localStorage
    localStorage.setItem('tasks', tasksJson);

    // Change the currentId into a string;
    let currentIdJson = JSON.stringify(this.currentId);

    // Add the currentId into the localStorage
    localStorage.setItem('currentId', currentIdJson);
  }

  load() {

    // Check if any tasks are saved in localStorage
    if (localStorage.getItem('tasks')) {

      // Retrieve the JSON string of tasks in localStorage
      let tasksJson = localStorage.getItem("tasks");

      // Convert tasks JSON string back into an array and store it in our TaskManager
      this.tasks = JSON.parse(tasksJson);
    }
    //Check if the currentId is in localStorage
    if (localStorage.getItem('currentId')) {
      // Retrieve the currentId string in localStorage
      let currentIdJson = localStorage.getItem("currentId");

      // Convert the currentId back to a number and store it in our TaskManager
      this.currentId = parseInt(currentIdJson);
    }
  }

  deleteTask(taskId) {
    let newTasks = [];
    this.tasks.forEach((taskToCheck) => {
      if (taskToCheck.id != taskId) {
        newTasks.push(taskToCheck);
      }
    })

    this.tasks = newTasks;
  }

};


module.exports = TaskManager
