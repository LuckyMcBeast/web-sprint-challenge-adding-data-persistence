// build your `/api/tasks` router here
const Express = require('express');
const model = require('./model');
const util = require('../utilityFuncts')

const router = Express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await model.getTasks();
        util.booleanCovert(tasks, 'task_completed');
        res.status(200).json(tasks);
    } catch (error) {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await model.createTask(req.body);
        util.booleanCovert(newTask, 'task_completed')
        res.status(201).json({RESOURCE_CREATED : [newTask]});
    } catch (error) {
        next();
    }

})

module.exports = router;