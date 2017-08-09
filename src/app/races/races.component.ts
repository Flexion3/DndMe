
import {Component, OnInit} from '@angular/core';
import {RacesService} from '../service/RacesService';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  providers: [RacesService]
})

export class RacesComponent implements OnInit {

  races = [];

  constructor(private racesService: RacesService) {
  }

  getRaces(): void {
     this.races = this.racesService.getRaces();
  }

  ngOnInit(): void {
    this.getRaces();
  }

}
