const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todoController');

router.get('/health', ctrl.health);
router.get('/', ctrl.getTodos);
router.post('/', ctrl.createTodo);
router.delete('/:id', ctrl.deleteTodo);
router.patch('/:id/toggle', ctrl.toggleTodo);

module.exports = router;
