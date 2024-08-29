import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component'; // Certifique-se de que o caminho esteja correto
import { TaskService } from '../task.service'; // Importa o serviço de tarefas

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'concluida' | 'em-andamento' | 'nao-concluida';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FormsModule],  // Certifique-se de que HeaderComponent está listado aqui
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  taskTitle = '';
  taskDescription = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    if (this.taskTitle && this.taskDescription) {
      this.taskService.addTask({ title: this.taskTitle, description: this.taskDescription }).subscribe((newTask) => {
        this.tasks.push(newTask);
        this.clearForm();
      });
    }
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe();
  }

  updateTaskStatus(index: number, status: 'concluida' | 'em-andamento' | 'nao-concluida') {
    const task = this.tasks[index];
    task.status = status;
    this.updateTask(task);
  }

  restartTask(index: number) {
    const task = this.tasks[index];
    this.taskService.restartTask(task.id).subscribe((updatedTask) => {
      this.tasks[index] = updatedTask;
    });
  }

  editTask(index: number) {
    this.taskTitle = this.tasks[index].title;
    this.taskDescription = this.tasks[index].description;
    this.deleteTask(index); // Remove a tarefa antiga para que a nova edição a substitua
  }

  deleteTask(index: number) {
    const task = this.tasks[index];
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks.splice(index, 1);
    });
  }

  clearForm() {
    this.taskTitle = '';
    this.taskDescription = '';
  }
}
