import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassesService} from '../service/ClassesService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  itemSelectEvent = new EventEmitter();

  @Input()
  selectedItem;

  @Input()
  items = [];

  ngOnInit() {

  }

  constructor(private classesService: ClassesService) {
  }
  onSelect(item): void {
    this.itemSelectEvent.emit(item);
  }

}
