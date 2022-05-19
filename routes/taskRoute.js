const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', async (_, res) => {
    const tasks = controller.getAllTasks();
    res.status(200).json(tasks);
});

router.get('/:id', async (req, res) => {
    const taskId = req.params['id'];
    const tasks = await db.query(
        `SELECT * FROM tasksTable WHERE id=$1;`, 
        [taskId]
    );
    res.json(tasks.rows[0]);
});

router.post('/', async (req, res) => {
    const {taskName, done} = req.body;

    const newTask = await db.query(
        `INSERT INTO tasksTable (taskName, done) VALUES ($1, $2) RETURNING *;`,
        [taskName, done]
    );
    // res.json(newTask.rows[0]);
    res.json();
});

router.delete('/:id', await (req, res) => {
    
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