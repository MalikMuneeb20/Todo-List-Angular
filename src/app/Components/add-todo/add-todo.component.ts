import { Component ,Output,EventEmitter,} from '@angular/core';
import { Todos } from 'src/app/todos';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string |undefined;
  description: string |undefined;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();



  onSubmit(){

    const currentDate = new Date;

    const todo={
      sno:8,
      title:this.title,
      description : this.description,
      active: true,
      date:new Date().toLocaleString(),
    }
    if(this.title && this.description != null){
      this.todoAdd.emit(todo);
    }
  }
}
