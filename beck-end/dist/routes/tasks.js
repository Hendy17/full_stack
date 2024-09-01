"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
// Obter todas as tarefas
router.get('/', async (req, res) => {
    try {
        const [rows] = await db_1.default.query('SELECT * FROM tasks');
        res.json(rows);
    }
    catch (error) {
        console.error('Erro ao obter as tarefas:', error);
        res.status(500).json({ error: 'Erro ao obter as tarefas' });
    }
});
// Adicionar uma nova tarefa
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const [result] = await db_1.default.execute('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, 'nao-concluida']);
        const newTask = {
            id: result.insertId,
            title,
            description,
            status: 'nao-concluida',
        };
        res.status(201).json(newTask);
    }
    catch (error) {
        console.error('Erro ao adicionar a tarefa:', error);
        res.status(500).json({ error: 'Erro ao adicionar a tarefa' });
    }
});
// Editar uma tarefa
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        const [result] = await db_1.default.execute('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.json({ id, title, description, status });
    }
    catch (error) {
        console.error('Erro ao editar a tarefa:', error);
        res.status(500).json({ error: 'Erro ao editar a tarefa' });
    }
});
// Reiniciar uma tarefa
router.put('/:id/restart', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db_1.default.execute('UPDATE tasks SET status = ? WHERE id = ?', ['em-andamento', id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.json({ id, status: 'em-andamento' });
    }
    catch (error) {
        console.error('Erro ao reiniciar a tarefa:', error);
        res.status(500).json({ error: 'Erro ao reiniciar a tarefa' });
    }
});
// Deletar uma tarefa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db_1.default.execute('DELETE FROM tasks WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar a tarefa:', error);
        res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
});
exports.default = router;
//# sourceMappingURL=tasks.js.map