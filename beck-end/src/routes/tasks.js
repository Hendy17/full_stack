"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasks = [];
var currentId = 1;
var router = (0, express_1.Router)();
// Obter todas as tarefas
router.get('/', function (req, res) {
    res.json(tasks);
});
// Adicionar uma nova tarefa
router.post('/', function (req, res) {
    var _a = req.body, title = _a.title, description = _a.description;
    var newTask = {
        id: currentId++,
        title: title,
        description: description,
        status: 'nao-concluida',
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
// Editar uma tarefa
router.put('/:id', function (req, res) {
    var id = req.params.id;
    var _a = req.body, title = _a.title, description = _a.description, status = _a.status;
    var task = tasks.find(function (t) { return t.id === parseInt(id); });
    if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
        res.json(task);
    }
    else {
        res.status(404).send('Task not found');
    }
});
// Reiniciar uma tarefa
router.put('/:id/restart', function (req, res) {
    var id = req.params.id;
    var task = tasks.find(function (t) { return t.id === parseInt(id); });
    if (task) {
        task.status = 'em-andamento';
        res.json(task);
    }
    else {
        res.status(404).send('Task not found');
    }
});
// Deletar uma tarefa
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    var taskIndex = tasks.findIndex(function (t) { return t.id === parseInt(id); });
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Task not found');
    }
});
exports.default = router;
