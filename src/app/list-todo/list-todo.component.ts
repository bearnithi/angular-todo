import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  @Input() toDo: any;
  showEdit: boolean;
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

}
