// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    return db('tasks');
}

async function createTask(task) {
    const [newTask] = await db('tasks').insert(task);
    return db('tasks').where({ task_id : newTask });
}

module.exports = {
    getTasks,
    createTask
}