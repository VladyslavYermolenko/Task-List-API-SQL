const res = require('express/lib/response');
const db = require('../database/db');

async function getAllTasks() {
    const tasks = await db.query(
        `SELECT * FROM tasksTable;`
    );
    return tasks.rows;
}

async function getOneTask(taskId) {
    const tasks = await db.query(
        `SELECT * FROM tasksTable WHERE id=$1;`,
        [taskId]
    );
    return tasks.rows[0];
}

async function createTask(taskName, done) {
    const newTask = await db.query(
        `INSERT INTO tasksTable (taskName, done) VALUES ($1, $2) RETURNING *;`,
        [taskName, done]
    );
    // res.json(newTask.rows[0]);
    return newTask.rows[0];
}

async function deleteTask(taskId) {
    const newTasks = await db.query(
        `SELECT * FROM tasksTable WHERE id = $1`,
        [taskId]
    );
}

async function putTask(id, taskName, done) {
    const newTask = await db.query(
        `UPDATE tasksTable SET taskName=$2, done=$3 WHERE id=$1 RETURNING *;`
        [id, taskName, done]
    );
    return newTask.rows[0];
}

async function patchTask(id, taskName, done) {
    const curTask = await db.query(
        `SELECT * FROM tasksTable WHERE id=$1`,
        [id]
    );
    const newTask = await db.query(
        `UPDATE tasksTable SET taskName=$2, done=$3 WHERE id=$1 RETURNING *;`
        [id, taskName || curTask['taskName'], done || curTask['done']]
    );
    return newTask.rows[0];
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    deleteTask,
    putTask,
    patchTask
}