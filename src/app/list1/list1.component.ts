import { Component, Input, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css'],
})
export class List1Component implements OnInit {
  @Input() items = [];
  constructor() {}

  ngOnInit() {}
}
