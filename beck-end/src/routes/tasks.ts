import { Router } from 'express';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'concluida' | 'em-andamento' | 'nao-concluida';
}

const tasks: Task[] = [];
let currentId = 1;

const router = Router();

// Obter todas as tarefas
router.get('/', (req, res) => {
  res.json(tasks);
});

// Adicionar uma nova tarefa
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTask: Task = {
    id: currentId++,
    title,
    description,
    status: 'nao-concluida',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Editar uma tarefa
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Reiniciar uma tarefa
router.put('/:id/restart', (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.status = 'em-andamento';
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Deletar uma tarefa
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

export default router;
