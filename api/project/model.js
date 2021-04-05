// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    return db('projects');
}

async function createProject(project) {
    const [newProject] = await db('projects').insert(project);
    return db('projects').where({ project_id : newProject });
}

module.exports = {
    getProjects,
    createProject
}