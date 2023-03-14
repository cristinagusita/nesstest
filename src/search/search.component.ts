import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  onKeyUp(event) {
    this.searchEvent.emit(event.target.value);
  }
}
