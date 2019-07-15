import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.scss']
})
export class CompletedTodoComponent implements OnInit {
  @Input() toDo: any;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

}
