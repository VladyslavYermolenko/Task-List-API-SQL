const express = require('express');
const db = require('../database/db');

class TaskController {
    async getAllTasks(_, res) {
        const tasks = await db.query(`
        SELECT * FROM tasksTable;`);
        res.json(tasks.rows)
    }
    
    async getOneTask(req, res) {
        const taskId = req.params['id'];
        const tasks = await db.query(`
        SELECT * FROM tasksTable WHERE id=$1;`, [taskId]);
        res.json(tasks.rows[0]);
    }

    async createTask(req, res) {
        const taskName = req.body['taskName'];
        const done = req.body['done'];

        const newTask = await db.query(`
        INSERT INTO tasksTable (taskName, done) VALUES ($1, $2) RETURNING *`, [taskName, done]);
        // res.json(newTask.rows[0]);
        res.json();
    }

    async deleteTask(req, res) {
        
    }

    async putTask(req, res) {
        
    }

    async patchTask(req, res) {
        
    }
}

module.exports = new TaskController();