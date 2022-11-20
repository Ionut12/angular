import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Data2Service {
  treburi = new BehaviorSubject([
    { name: 'ion', status: 'todo' },
    { name: 'aaaa', status: 'todo' },
    { name: 'sss', status: 'todo' },
    { name: 'ion', status: 'todo' },
  ]);
  constructor() {}

  addTreaba(name, status) {
    // let treaba = { name: name, status: status };
    // let curenttreaba = this.treburi.getValue();
    // curenttreaba.push(treaba);
    // this.treburi.next(curenttreaba);
    this.treburi.next([
      ...this.treburi.getValue(),
      { name: name, status: status },
    ]);
  }
}
