import {Component, Input} from '@angular/core';
import {Task} from "../../utils/models/Task";

@Component({
  selector: 'app-card[tache]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() tache!: Task;

}
