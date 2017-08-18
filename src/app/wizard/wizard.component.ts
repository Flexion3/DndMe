import {Component, OnInit} from '@angular/core';
import {ClassesService} from '../service/ClassesService';
import {RacesService} from '../service/RacesService';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  providers: [ClassesService, RacesService]
})
export class WizardComponent implements OnInit {
  wizardItems = [
    {step: 1, name: 'CLASS'},
    {step: 2, name: 'RACE'},
    {step: 3, name: 'BACKGROUND'}
  ];
  currentWizardItem;
  currentItem;
  savedClass;
  savedRace;
  savedBackground;

  contentItems = [];

  constructor(private classesService: ClassesService, private racesService: RacesService) {
  }

  ngOnInit() {
    this.currentWizardItem = this.wizardItems[0];
    this.stepChange();
  }

  stepChange() {
    delete this.currentItem;
    switch (this.currentWizardItem.step) {
      case 1:
        this.contentItems = this.classesService.getDndClasses();
        break;
      case 2:
        this.contentItems = this.racesService.getRaces();
        break;
      default:
        this.contentItems = [];
        break;
    }
  }

  saveClass() {
      this.savedClass = this.currentItem;
      this.wizardItems[0] = {step: 1, name: 'Class: ' + this.savedClass.name};
      this.currentWizardItem = this.wizardItems[1];
      this.stepChange();
  }

  selectItem(item) {
    switch (this.currentWizardItem.step) {
      case 1:
        this.classesService.getDndClassDetails(item.url).then(value => this.currentItem = value);
        break;
      case 2:
        this.currentItem = {};
        break;
      default:
        this.currentItem = [];
        break;
    }
    console.log('Current Item', this.currentItem);
  }

  onStepClick(item) {
    if (item.step < this.currentWizardItem.step) {
      this.currentWizardItem = item;
      this.stepChange();
    }
  }


}
