import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
})
export class AppComponent {
  title = 'my-angular-project';

  // Array para armazenar as tarefas com o status
  tasks: { title: string; description: string; status: 'concluida' | 'em-andamento' | 'nao-concluida' }[] = [
    {
      title: 'Revisão de Procedimentos de Qualidade',
      description: 'Revisar e atualizar os procedimentos operacionais padrão (POP) da empresa laboratorial.',
      status: 'nao-concluida',
    },
    {
      title: 'Inventário de Reagentes',
      description: 'Realizar inventário de todos os reagentes em estoque e atualizar o sistema de gerenciamento de inventário.',
      status: 'em-andamento',
    },
    {
      title: 'Treinamento de Segurança',
      description: 'Organizar e ministrar treinamento de segurança para todos os funcionários do laboratório.',
      status: 'concluida',
    },
    {
      title: 'Manutenção de Equipamentos',
      description: 'Programar e executar a manutenção preventiva dos principais equipamentos de laboratório.',
      status: 'nao-concluida',
    },
  ];

  taskTitle = '';
  taskDescription = '';

  addTask() {
    if (this.taskTitle && this.taskDescription) {
      this.tasks.push({
        title: this.taskTitle,
        description: this.taskDescription,
        status: 'nao-concluida', // Nova tarefa começa como "Não Concluída"
      });
      this.clearForm();
    }
  }

  // Método para reiniciar a tarefa
  restartTask(index: number) {
    alert(`Tarefa "${this.tasks[index].title}" foi reiniciada!`);
    this.tasks[index].status = 'em-andamento'; // Reconfigura o status da tarefa para "Em Andamento"
  }

  // Atualizar o status da tarefa
  updateTaskStatus(index: number, status: 'concluida' | 'em-andamento' | 'nao-concluida') {
    this.tasks[index].status = status;
  }

  editTask(index: number) {
    this.taskTitle = this.tasks[index].title;
    this.taskDescription = this.tasks[index].description;
    this.deleteTask(index); // Remove a tarefa antiga para que a nova edição a substitua
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearForm() {
    this.taskTitle = '';
    this.taskDescription = '';
  }
}
