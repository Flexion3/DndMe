import {Injectable} from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';
import {Http, RequestOptions} from '@angular/http';

const endpoint = 'http://localhost:8090/classes';

@Injectable()
export class ClassesService {

  getDndClasses() {
    const dndclasses = [];
    fetch(endpoint)
      .then(blob => blob.json())
      .then((value) => {
          dndclasses.push(...value);
        }
      )
      .catch(error => console.log(error));
    return dndclasses;
  }


  getDndClassDetails(url) {
    return fetch(url)
      .then(blob => blob.json());

  }
}
