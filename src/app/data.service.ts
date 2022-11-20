import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  persons = [
    { name: 'ion', location: 'vaslui' },
    { name: 'aaaa', location: 'brasov' },
    { name: 'sss', location: 'rrrr' },
    { name: 'ion', location: 'vaslui' },
  ];
  constructor() {}
}
