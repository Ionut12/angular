import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(public data: DataService) {}
  ngOnInit() {}
  addUser() {
    this.data.addPerson('Vasile', 'azuga');
  }
}
