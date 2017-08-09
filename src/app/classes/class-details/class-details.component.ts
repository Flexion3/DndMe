import {Component, Input, OnInit} from '@angular/core';
import {ClassesService} from '../../service/ClassesService';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css'],
  providers: [ClassesService]
})
export class ClassDetailsComponent implements OnInit {
  @Input() dndclass;

  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
  }



}
