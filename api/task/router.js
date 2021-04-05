// build your `/api/tasks` router here
const Express = require('express');
const model = require('./model');

const router = Express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await model.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await model.createTask(req.body);
        res.status(201).json({RESOURCE_CREATED : newTask});
    } catch (error) {
        next();
    }

})

module.exports = router;