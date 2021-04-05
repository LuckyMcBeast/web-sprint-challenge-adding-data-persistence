// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    return db('projects');
}

async function createProject(project) {
    const [newProject] = await db('projects').insert(project);
    const [checkData] = await db('projects').where({ project_id : newProject });
    return checkData;
}

module.exports = {
    getProjects,
    createProject
}