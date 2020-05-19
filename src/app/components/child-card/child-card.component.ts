import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/shared/Person';
import { environment } from 'src/environments/environment';

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

  getPersonLink(personId: number) {
    return (environment.rootUrl + "personDetail/" + personId);
  }

  getAge(birthYear:number){
    return new Date().getFullYear() - birthYear;
  }

}
