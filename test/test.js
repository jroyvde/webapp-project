const assert = require('assert');
const TaskManager = require('../js/taskManager');


describe('TaskManager', () => {
    describe('addTask', () => {
        it('should successfully add a new task to the taskManager ', () => {
            const firstTaskManager = new TaskManager(1);
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
});