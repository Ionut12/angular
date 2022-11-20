import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-add-treaba',
  templateUrl: './add-treaba.component.html',
  styleUrls: ['./add-treaba.component.css'],
})
export class AddTreabaComponent implements OnInit {
  constructor(public data2: Data2Service) {}
  ngOnInit() {}
  adauga() {
    this.data2.addTreaba('aaaaaaaaaaaa', 'todo');
  }
}
