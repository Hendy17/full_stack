import { Router, Request, Response } from 'express';
import pool from '../db';

const router = Router();

// Obter todas as tarefas
router.get('/', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao obter as tarefas:', error);
    res.status(500).json({ error: 'Erro ao obter as tarefas' });
  }
});

// Adicionar uma nova tarefa
router.post('/', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const [result]: any = await pool.execute(
      'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
      [title, description, 'nao-concluida']
    );
    const newTask = {
      id: result.insertId,
      title,
      description,
      status: 'nao-concluida',
    };
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Erro ao adicionar a tarefa:', error);
    res.status(500).json({ error: 'Erro ao adicionar a tarefa' });
  }
});

// Editar uma tarefa
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const [result]: any = await pool.execute(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ id, title, description, status });
  } catch (error) {
    console.error('Erro ao editar a tarefa:', error);
    res.status(500).json({ error: 'Erro ao editar a tarefa' });
  }
});

// Reiniciar uma tarefa
router.put('/:id/restart', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [result]: any = await pool.execute(
      'UPDATE tasks SET status = ? WHERE id = ?',
      ['em-andamento', id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ id, status: 'em-andamento' });
  } catch (error) {
    console.error('Erro ao reiniciar a tarefa:', error);
    res.status(500).json({ error: 'Erro ao reiniciar a tarefa' });
  }
});

// Deletar uma tarefa
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [result]: any = await pool.execute(
      'DELETE FROM tasks WHERE id = ?',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar a tarefa:', error);
    res.status(500).json({ error: 'Erro ao deletar a tarefa' });
  }
});

export default router;
