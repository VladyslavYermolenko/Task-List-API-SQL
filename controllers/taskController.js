const db = require('../database/db');

class TaskController {
    async getAllTasks(req, res) {
        
    }
    
    async getOneTask(req, res) {
        
    }

    async createTask(req, res) {
        const {task, done} = req.body;
        const newTask = await db.query(`
        INSERT INTO tasksTable (task, done) VALUE ($1, $2) RETURNING *`, [task, done]);
        res.json('ok');
    }

    async deleteTask(req, res) {
        
    }

    async putTask(req, res) {
        
    }

    async patchTask(req, res) {
        
    }
}

module.exports = new TaskController();