import { Component } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todos[] | undefined;
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todos) {
    console.log(todo);
    this.todos?.splice(this.todos?.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todos) {
    console.log(todo);
    this.todos?.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toogleTodo(todo: Todos) {
    const index = this.todos?.indexOf(todo);
    // ts.todoshi?.indexOf(todo).active = !this.todo?.active;
    todo.active = !todo.active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
