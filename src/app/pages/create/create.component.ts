import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodosService} from "../../utils/services/todos.service";
import {Task} from "../../utils/models/Task";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  todo_form = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>(''),
    is_done: new FormControl<boolean>(false),
  });

  constructor(private todoService: TodosService, private router: Router) {}

  get title() {
    return this.todo_form.controls.title as FormControl;
  }

  submit() {
    if (this.todo_form.valid) {
      const tache: Task = this.todo_form.value as Task;
      this.todoService.create(tache).subscribe((res) => {
       // this.todo_form.reset();
        this.router.navigate(['/']);
      })
    }
  }

}
