const assert = require('assert');
const TaskManager = require('../js/taskManager');

const firstTaskManager = new TaskManager();

describe('TaskManager', () => {
    describe('addTask', () => {
        afterEach(() => {
            firstTaskManager.tasks = [];
            firstTaskManager.currentId = 0;
        });
        
        it('should successfully add a new task to the taskManager ', () => {
            
            firstTaskManager.addTask('wash the dishes', 'Need to wahs the dishes', 'Georges', '2021-03-12', 'TO DO');
            let success = false;
            firstTaskManager.tasks.forEach((item) => {
                if (item.name === 'wash the dishes') {
                    success = true;
                }
            })

            assert.strictEqual(success, true);
        })
    });
    describe('deleteTask', () => {
        afterEach(() => {
            firstTaskManager.tasks = [];
            this.currentId = 0;
        });
        
        it('should successfully remove the chosen task', () => {
            firstTaskManager.addTask(
              "wash the dishes",
              "Need to wahs the dishes",
              "Georges",
              "2021-03-12",
              "TO DO"
            );
            firstTaskManager.deleteTask(0);
            let success = true;
            firstTaskManager.tasks.forEach((item) => {
                if (item.name === "wash the dishes") {
                success = false;
                }
            });
            console.log(firstTaskManager.tasks);
            assert.strictEqual(success, true);
        })
    })
});