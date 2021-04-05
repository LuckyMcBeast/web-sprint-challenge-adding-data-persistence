// build your `/api/resources` router here
const Express = require('express');
const model = require('./model');

const router = Express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await model.getResources();
        res.status(200).json(resources);
    } catch (error) {
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newRes = await model.createResource(req.body);
        res.status(201).json({RESOURCE_CREATED : newRes});
    } catch (error) {
        next();
    }

})

module.exports = router;