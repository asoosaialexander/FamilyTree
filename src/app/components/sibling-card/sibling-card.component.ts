import { Component, OnInit, Input } from '@angular/core';
import { Sibling } from 'src/app/shared/Person';

@Component({
  selector: 'app-sibling-card',
  templateUrl: './sibling-card.component.html',
  styleUrls: ['./sibling-card.component.css']
})
export class SiblingCardComponent implements OnInit {

  @Input() sibling: Sibling;

  constructor() { }

  ngOnInit() {
  }

}
