import { Component } from '@angular/core';
import { ToDoItem } from '../todoitem';
import { ITEMS } from '../mock-todo-items';

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
  };
  googleClasses= {
    redFont: true,
    blueFont: false
  }
  homePageUrl: string = "https://logbook.itstep.org/";
  itemsList: ToDoItem[] = ITEMS;
  blueFont:boolean= true;
  lblStyles  = {
    color: "magenta",
    "background-color": "skyblue",
    fontStyle: "italic"
  }
  days: string[] = ["Понеділок", "Вівторок", "Середа", "Четвер"]
}
