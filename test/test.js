const assert = require('assert');
const TaskManager = require('../js/taskManager');

const firstTaskManager = new TaskManager();

describe('TaskManager', () => {
    describe('.addTask', () => {
        // TEARDOWN: Reset the firstTaskManager after running each test
        afterEach(() => {
            firstTaskManager.tasks = [];
            firstTaskManager.currentId = 0;
        });
        
        it('should successfully add a new task to the taskManager ', () => {
            // EXERCISE: Add the 'wash the dishes' task into the tasks array
            firstTaskManager.addTask('wash the dishes', 'Need to wash the dishes', 'Georges', '2021-03-12', 'TO DO');
            // Declare boolean 'success' and set its value to 'false'
            let success = false;
            // Iterate through each item in the 'tasks' array
            firstTaskManager.tasks.forEach((item) => {
                // If an item with the 'name' 'wash the dishes' is found, change 'success' to 'true'
                if (item.name === 'wash the dishes') {
                    success = true;
                }
            })

            // VERIFY: Check if success is true
            assert.strictEqual(success, true);
        })
    });
    describe('.deleteTask', () => {
      // TEARDOWN: Reset the firstTaskManager after running each test
      afterEach(() => {
        firstTaskManager.tasks = [];
        firstTaskManager.currentId = 0;
      });

      it("should successfully remove the chosen task", () => {
        // EXERCISE: Add the 'wash the dishes' task into the tasks array
        firstTaskManager.addTask(
          "wash the dishes",
          "Need to wash the dishes",
          "Georges",
          "2021-03-12",
          "TO DO"
        );
        // Call .deleteTask to remove the task in index 0, which should be the task we just added
        firstTaskManager.deleteTask(0);
        // Declare boolean 'success' and set its value to 'true'
        let success = true;
        // Iterate through each item in the 'tasks' array
        firstTaskManager.tasks.forEach((item) => {
          // If an item with the 'name' 'wash the dishes' is found, change 'success' to 'false'
          if (item.name === "wash the dishes") {
            success = false;
          }
        });

        // VERIFY: Check if success is true
        assert.strictEqual(success, true);
      });
    })
    describe('.getTaskById', () => {
      // TEARDOWN: Reset the firstTaskManager after running each test
      afterEach(() => {
        firstTaskManager.tasks = [];
        firstTaskManager.currentId = 0;
      });

      it("should successfully get a task object by its ID number", () => {
        // SETUP: Declare the expected result, which will be the first task object in the 'tasks' array
        const expectedResult = {
          assignedTo: "Georges",
          description: "Need to wash the dishes",
          dueDate: "2021-03-12",
          id: 0,
          name: "wash the dishes",
          status: "TO DO",
        };

        // EXERCISE: Add the 'wash the dishes' task
        firstTaskManager.addTask(
          "wash the dishes",
          "Need to wash the dishes",
          "Georges",
          "2021-03-12",
          "TO DO"
        );
        // Set 'result' to the result of calling getTaskById on the task with ID '0'
        const result = firstTaskManager.getTaskById(0);

        // VERIFY: Check that the result of calling getTaskById is equal to the expected result (the object in the tasks array with an index of '0')
        assert.deepStrictEqual(result, expectedResult);
      });
    })
});