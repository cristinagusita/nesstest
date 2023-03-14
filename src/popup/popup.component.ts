import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  imports: [CommonModule],
})
export class PopupComponent {
  @Input() title: string;
  @Input() hidden: boolean = true;
  @Output() buttonEmitter = new EventEmitter<[boolean, string]>();
  public value: string;
  updateValue(event) {
    this.value = event.target.value;
  }
  clickSubmit(event) {
    this.buttonEmitter.emit([true, this.value]);
  }
  clickCancel(event) {
    this.buttonEmitter.emit([false, this.value]);
  }
}
