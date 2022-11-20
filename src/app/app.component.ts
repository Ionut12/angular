import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  options = [];
  constructor(public data: DataService) {}
  ngOnInit() {
    for (let Person of this.data.persons) {
      if (!this.options.includes(Person.location)) {
        this.options.push(Person.location);
      }
    }
  }
}

interface IonComponent {
  ionInit();
}
///
class IonSelector implements IonComponent {
  constructor(ionService: IonService) {}
  ionInit() {}
}

class IonService {
  orice = 'orice';
}

//
let ionSRVIn = new IonService();
let allComponents: IonComponent[] = [new IonSelector(ionSRVIn)];

// e gata s-a randat
for (let c of allComponents) {
  c.ionInit();
}

// uNITY
class MonoBehavior {
  transform = [6, 7];

  start() {}

  update() {}
}

class CarController extends MonoBehavior {
  update() {}
}
