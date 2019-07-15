import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  toDoLists: Array<any> = [];
  toDoSubscription: Subscription;

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoSubscription = this.toDoService.toDoAdded$.subscribe((toDoLists) => {
      this.toDoLists = toDoLists;
    });
  }

  ngOnDestroy() {
    this.toDoSubscription.unsubscribe();
  }
}
