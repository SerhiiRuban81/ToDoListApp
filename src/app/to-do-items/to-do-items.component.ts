import { Component } from '@angular/core';
import { ToDoItem } from '../todoitem';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css', "../app.component.css"],
})
export class ToDoItemsComponent {
  toDoItem: ToDoItem = {
    id: 2,
    name: "Завантажити домашнє завдання",
    isFinished: true
  }
  days: string[] = ["Понеділок", "Вівторок", "Середа", "Четвер"]
}
