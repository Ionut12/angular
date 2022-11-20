import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  persons = [];
  options: string[] = [];
  constructor(public data: DataService) {}
  ngOnInit() {
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
