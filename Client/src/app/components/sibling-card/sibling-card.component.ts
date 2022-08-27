import { Component, OnInit, Input } from '@angular/core';
import { Sibling } from 'src/app/shared/Sibling';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sibling-card',
  templateUrl: './sibling-card.component.html',
  styleUrls: ['./sibling-card.component.css']
})
export class SiblingCardComponent implements OnInit {

  @Input() sibling: Sibling;
  badge: string;
  age: number;

  constructor() { }

  ngOnInit() {
    if (this.sibling.info.birthYear) {
      this.age = new Date().getFullYear() - this.sibling.info.birthYear;
    }
    switch (this.sibling.relation) {
      case 'Younger Brother': this.badge = 'badge badge-primary'; break;
      case 'Younger Sister': this.badge = 'badge badge-warning'; break;
      case 'Elder Sister': this.badge = 'badge badge-danger'; break;
      case 'Sister': this.badge = 'badge badge-danger'; break;
      case 'Elder Brother': this.badge = 'badge badge-success'; break;
      case 'Brother': this.badge = 'badge badge-success'; break;
    }
  }

  getPersonLink(personId: number) {
    return (environment.rootUrl + 'personDetail/' + personId);
  }

}
