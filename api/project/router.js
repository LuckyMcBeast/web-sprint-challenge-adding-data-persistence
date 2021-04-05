// build your `/api/projects` router here
const Express = require('express');
const model = require('./model');
const util = require('../utilityFuncts')

const router = Express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await model.getProjects();
        util.booleanCovert(projects, 'task_completed')
        res.status(200).json(projects);
    } catch (error) {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await model.createProject(req.body);
        util.booleanCovert(newProjects, 'task_completed')
        //newProject[project_completed] = Boolean(newProject[task_completed]);
        res.status(201).json({RESOURCE_CREATED : newProject});
    } catch (error) {
        next();
    }
})

module.exports = router;