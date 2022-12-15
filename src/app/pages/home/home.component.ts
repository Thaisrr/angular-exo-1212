import {Component, OnInit} from '@angular/core';
import {TodosService} from "../../utils/services/todos.service";
import {Tasks} from "../../utils/models/Task";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  todos?: Tasks;
  filtre: 'all' | boolean = 'all';
  constructor(private todoService: TodosService ) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getAll().subscribe({
      next: res => this.todos = res
    });
  }

}
