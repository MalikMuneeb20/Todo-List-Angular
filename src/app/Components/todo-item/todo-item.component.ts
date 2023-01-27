import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo :Todos | undefined;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();
  constructor(){

  }

  onClick(todo:Todos | undefined){
    this.todoDelete.emit(todo);

    console.log("on Click has been trigerred");
  }

  onCheckBoxClick(todo:Todos | undefined){
      this.todoCheckbox.emit(todo);
  }
}
