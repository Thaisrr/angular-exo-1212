import { Component } from '@angular/core';
import {TodosService} from "../../utils/services/todos.service";
import {Tasks} from "../../utils/models/Task";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todos: Tasks;
  constructor(private todoService: TodosService ) {
    this.todos = todoService.tasks;

  }

}
