// build your `/api/projects` router here
const Express = require('express');
const model = require('./model');

const router = Express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await model.getProjects();
        res.status(200).json(projects);
    } catch (error) {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await model.createProject(req.body);
        res.status(201).json({RESOURCE_CREATED : newProject});
    } catch (error) {
        next();
    }

})

module.exports = router;