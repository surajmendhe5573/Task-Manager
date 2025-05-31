const express= require('express');
const {createTask, getTasks, updateTasks, deleteTasks} = require('../controllers/task.controller');
const authenticate = require('../middlewares/auth.middleware');
const router= express.Router();

router.post('/', authenticate, createTask);
router.get('/', authenticate, getTasks);
router.put('/:id', authenticate, updateTasks);
router.delete('/:id', authenticate, deleteTasks);

module.exports= router;