const express = require('express');
const db = require('../database/db');

class TaskController {
    async getAllTasks(req, res) {
        const tasks = await db.query(`
        SELECT * FROM tasksTable;`);
        res.json(tasks.rows)
    }
    
    async getOneTask(req, res) {
        
    }

    async createTask(req, res) {
        const taskName = req.body['taskName'];
        const done = req.body['done'];
        console.log(req.body);
        console.log(taskName, done);
        const newTask = await db.query(`
        INSERT INTO tasksTable (taskName, done) VALUES ($1, $2) RETURNING *`, [taskName, done]);
        // res.json(newTask.rows[0]);
        res.json('Done!');
    }

    async deleteTask(req, res) {
        
    }

    async putTask(req, res) {
        
    }

    async patchTask(req, res) {
        
    }
}

module.exports = new TaskController();