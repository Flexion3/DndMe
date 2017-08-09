import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassesService} from '../service/ClassesService';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  providers: [ClassesService]
})


export class ClassesComponent implements OnInit {

  @Output()
  classSave = new EventEmitter();

  @Input()
  selectedClass;

  classes = [];

  constructor(private classesService: ClassesService) {
  }

  getClasses(): void {
    this.classes = this.classesService.getDndClasses();
  }

  ngOnInit(): void {
    this.getClasses();
  }

  onSelect(dndClass): void {
    this.classesService.getDndClassDetails(dndClass.url)
      .then(data => {
        this.selectedClass = data;
      });
  }

  onSaveClass(): void {
    this.classSave.emit(this.selectedClass);
  }


}
