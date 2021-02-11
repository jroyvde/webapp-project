const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
  <li>     
    <div class="row m-2">
        <!--This column contains the CARD for the sample task-->
        <div class="col-10">
          <div class="card-header" style="text-align:left;">
            ${name}
          </div>
          <div class="card-body" style="text-align: left;">
            <p class="card-text ">${description}</p>
          </div>
          <div class="card-footer text-muted row px-0 mx-0">
            <div class="col-md-7 d-flex align-items-center">
              <span class="mr-4">Assigned to: ${assignedTo}</span>
              <span class="mr-4">Date: ${dueDate}</span>
              <span class="">Status: ${status}</span>
            </div>
            <div class="col-md-5 d-flex justify-content-end">
              <a href="#" class="btn btn-success">Edit</a>
              <a href="#" class="btn btn-danger ml-1">Delete</a>
            </div>
          </div>
        </div>
        <!--This column contains the CHECKBOX for the sample task-->
        <div class="col-2 p-1">
          <input type="checkbox" class="checkbox">
        </div>
    </div>
  </li>`; ;
  return html;
}

class TaskManager {
  constructor(currentId) {
    this.tasks = []
    this.currentId = 0;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId++;
    const newTask = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    }
    this.tasks.push(newTask);
  }

  render() {
    const tasksHtmlList = [];
    this.tasks.forEach((element) => {
      const date = new Date(element.dueDate);
      const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      const taskHtml = createTaskHtml(element.name, element.description, element.assignedTo, formattedDate, element.status)
      tasksHtmlList.push(taskHtml);
    })

    const tasksHtml = tasksHtmlList.join("\n")
    document.querySelector('#task-list').innerHTML = tasksHtml;
  };



};
