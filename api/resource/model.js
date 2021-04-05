// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResources() {
    return db('resources');
}

async function createResource(resource) {
    const [newResource] = await db('resources').insert(resource);
    return db('resources').where({ resource_id : newResource });
}

module.exports = {
    getResources,
    createResource
}