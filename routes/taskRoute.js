const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', async (_, res) => {
    try {
        const tasks = await controller.getAllTasks();
        if (tasks) {
            res.status(200).json(tasks);
        }
        else {
            res.status(200).json('At the moment there are no tasks...');
        }
    }
    catch (error) {
        res.status(404).json('Not found!');
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await controller.getOneTask(req.params['id']);
        if (task) {
            res.status(200).json(task);
        }
        else {
            res.status(404).json('Task not found!');
        }
    }
    catch (error) {
        res.status(404).json('Not found!');
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { taskName, done } = req.body;
        if (taskName) {
            const newTask = await controller.createTask(taskName, done);
            if (newTask) {
                res.status(200).json(newTask);
            }
            else {
                res.status(404).json('Failed to send request.');
            }
        }
        else {
            res.status(404).json('The body is incorrect.');
        }
    }
    catch (error) {
        res.status(404).json('Not found!');
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    
});

router.put('/', async (req, res) => {
    const {id, taskName, done} = req.body;
    const newTask = await db.query(
        `UPDATE tasksTable SET taskName=$2, done=$3 WHERE id=$1 RETURNING *;`
        [id, taskName, done]
    );
    res.json()
});

router.patch('/', async (req, res) => {

});

module.exports = router;