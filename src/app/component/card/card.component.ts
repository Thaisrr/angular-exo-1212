import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../utils/models/Task";
import {TodosService} from "../../utils/services/todos.service";

@Component({
  selector: 'app-card[tache]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() tache!: Task;
  @Output() reload_emitter = new EventEmitter();

  constructor(private todoService: TodosService) {}

  remove() {
    this.todoService.remove(this.tache.id).subscribe(res => {
      console.log(res);
      this.reload_emitter.emit();
    })
  }

  update() {
    this.todoService.update({is_done: !this.tache.is_done}, this.tache.id).subscribe(
      () => this.reload_emitter.emit()
    )
  }

}
