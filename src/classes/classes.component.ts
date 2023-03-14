import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { ClassComponent } from '../class/class.component';

import { IClass } from '../class/class.interface';
import { PopupComponent } from '../popup/popup.component';
import { SearchComponent } from '../search/search.component';
import { ClassesService } from './classes.service';

@Component({
  standalone: true,
  selector: 'classes-component',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  imports: [CommonModule, ClassComponent, SearchComponent, PopupComponent],
  providers: [ClassesService],
})
export class ClassesComponent {
  public classes: IClass[];
  public filteredClasses: IClass[];
  public hidden: boolean = true;
  private searchValue: string = '';
  public classToAddTo: string;

  constructor(private dataService: ClassesService) {}
  ngOnInit() {
    this.updateList();
  }
  updateList() {
    this.classes = this.dataService.getData();
    this.filterClasses();
  }
  search(event) {
    this.searchValue = event;
    this.filterClasses();
  }
  filterClasses() {
    this.filteredClasses = [];
    this.classes.forEach((item) => {
      if (
        this.searchValue == '' ||
        item.name.toLowerCase().startsWith(this.searchValue.toLowerCase())
      ) {
        this.filteredClasses.push(item);
      }
    });
  }
  deleteClass(event) {
    this.dataService.delete(event);
    this.updateList();
  }
  addStudent(event) {
    this.classToAddTo = event;
    this.hidden = false;
  }
  buttonHandler(event) {
    const [button, name] = event;
    if (button) {
      this.dataService.addStudent(this.classToAddTo, name);
    }
    this.updateList();
    this.hidden = true;
  }
}
