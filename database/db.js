const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    user: 'todolist_app',
    password: 'secret',
    database: 'tasklists'
});

module.exports = client;