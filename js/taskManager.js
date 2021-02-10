class TaskManager {
    constructor(currentId) {
        this.tasks = []
        this.currentId = 0;
    }
    addTask(name,description,assignedTo,dueDate,status){
        this.currentId ++;
        const newTask = {
            id : this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            
        }
        this.tasks.push(newTask);
    }
};