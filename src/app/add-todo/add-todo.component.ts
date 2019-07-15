import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo: string;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  addItem(): void {
    this.todoService.addItem({
      name: this.todo,
      isCompleted: false
    });

    this.todo = '';
  }

}
