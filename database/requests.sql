CREATE TABLE if not exists tasksTable(
    id SERIAL PRIMARY KEY,
    taskname VARCHAR(255),
    done boolean DEFAULT false
);