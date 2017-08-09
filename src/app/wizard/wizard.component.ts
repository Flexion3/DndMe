import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {


  wizardItems = [
    {step: 1, name: 'choose a class'},
    {step: 2, name: 'choose a race'},
    {step: 3, name: 'choose a background'}
  ];
  currentItem;
  currentClass;

  constructor() {
  }

  ngOnInit() {
    this.currentItem = this.wizardItems[0];
  }

  saveClass(dndclass) {
    if (dndclass) {
      this.currentClass = dndclass;
      this.wizardItems[0] = {step: 1, name: 'Class: ' + this.currentClass.name};
      this.currentItem = this.wizardItems[1];
    }
  }

  onStepClick(item) {
    if (item.step <= this.currentItem.step) {
      this.currentItem = item;
    }
  }


}
