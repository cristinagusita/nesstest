import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OccupancyComponent } from '../occupancy/occupancy.component';
import { IClass } from './class.interface';

@Component({
  standalone: true,
  selector: 'class-component',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  imports: [OccupancyComponent],
})
export class ClassComponent {
  @Input() class: IClass;
  @Output() deleteEventEmitter = new EventEmitter<string>();
  @Output() addEventEmitter = new EventEmitter<string>();
  clickDelete(event) {
    this.deleteEventEmitter.emit(this.class.name);
  }
  clickAdd(event) {
    this.addEventEmitter.emit(this.class.name);
  }
}
