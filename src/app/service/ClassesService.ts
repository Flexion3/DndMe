import {Injectable} from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';

const endpoint = 'http://www.dnd5eapi.co/api/classes';

@Injectable()
export class ClassesService {

  getDndClasses() {
    const dndclasses = [];
    fetch(endpoint)
      .then(blob => blob.json())
      .then((value) => dndclasses.push(...value.results));
    return dndclasses;
  }


  getDndClassDetails(url) {
    return fetch(url)
      .then(blob => blob.json());

  }
}
