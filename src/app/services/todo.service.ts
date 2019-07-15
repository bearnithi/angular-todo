import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /**
   * List of all the todo items will be stored in this array.
   */
  toDoList: Array<any> = [];

  /**
   * Whenever a item gets added, this subject emits the todo list
   */
  toDoAdded$: Subject<any> = new Subject<any>();

  constructor() { }

  /**
   *
   * @param todo new todo item
   *
   * It adds the new todo item to the array.
   */
  addItem(todo: any) {
    this.toDoList.push(todo);
    this.publishToDoList();
  }

  /**
   * @param todo todo item which you want to remove
   *
   * finds the index, and remove the todo item from the todolist.
   */
  removeItem(toDo: any) {
    const toDoIndex = this.toDoList.indexOf(toDo);
    if (toDoIndex > -1) {
      this.toDoList.splice(toDoIndex, 1);
    }
    this.publishToDoList();
  }

  /**
   * Used to emits the todolist to all the listening components.
   */
  publishToDoList() {
    this.toDoAdded$.next(this.toDoList);
  }
}
