import {Injectable} from '@angular/core';

const endpoint = 'http://www.dnd5eapi.co/api/races';


@Injectable()
export class RacesService {

  getRaces() {
    const races = [];
    fetch(endpoint)
      .then(blob => blob.json())
      .then((value) => races.push(...value.results));
    return races;
  }
}
