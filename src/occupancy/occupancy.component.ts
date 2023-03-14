import { Component, Input } from '@angular/core';
import { IClass } from '../class/class.interface';
@Component({
  standalone: true,
  selector: 'occupancy-component',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css'],
})
export class OccupancyComponent {
  @Input() class: IClass;
  public color: string;
  public length: number;

  ngOnInit(): void {
    const numberOfStudents = this.class.students.length;
    this.length = (numberOfStudents / this.class.maxNoOfStudents) * 100;
    this.length = Math.ceil(this.length);
    if (this.length < 25) {
      this.color = 'green';
    } else if (this.length < 75) {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }
  }
}
