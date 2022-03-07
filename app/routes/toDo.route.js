const express = require('express');

const {
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getToDo);
router.post('/', createToDo);
router.patch('/', updateToDo);
router.delete('/', deleteToDo);

module.exports = { toDoRouter: router };