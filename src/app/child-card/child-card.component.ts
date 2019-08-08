import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/Person';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildrenCardComponent implements OnInit {
  @Input() child: Person[];

  constructor() { }

  ngOnInit() {
  }

}
