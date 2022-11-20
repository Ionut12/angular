import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  // persons = [
  //   { name: 'ion', location: 'vaslui' },
  //   { name: 'aaaa', location: 'brasov' },
  //   { name: 'sss', location: 'rrrr' },
  //   { name: 'ion', location: 'vaslui' },
  // ];
  persons = new BehaviorSubject([
    { name: 'ion', location: 'vaslui' },
    { name: 'aaaa', location: 'brasov' },
    { name: 'sss', location: 'rrrr' },
    { name: 'ion', location: 'vaslui' },
  ]);
  constructor() {}
  addPerson(name, location) {
    let person = { name: name, location: location };
    let curentPerson = this.persons.getValue();
    curentPerson.push(person);
    this.persons.next(curentPerson);
  }
}
