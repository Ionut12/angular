import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { Data2Service } from './data2.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  persons = [];
  options: string[] = [];
  treburiToDo = [];
  treburiDone = [];
  constructor(public data: DataService, public data2: Data2Service) {}
  ngOnInit() {
    this.data2.treburi.subscribe((value) => {
      this.treburiToDo = value.filter((treaba) => treaba.status === 'todo');
      this.treburiDone = value.filter((treaba) => treaba.status === 'done');
    });

    this.data.persons.subscribe((value) => {
      this.persons = value;
      for (let Person of this.persons) {
        if (!this.options.includes(Person.location)) {
          this.options.push(Person.location);
        }
      }
    });
  }
}
