const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', controller.getAllTasks);
router.get('/:id', controller.getOneTask);

router.post('/', controller.createTask);

router.delete('/:id', controller.deleteTask);
router.put('/', controller.putTask);
router.patch('/', controller.patchTask);

module.exports = router;