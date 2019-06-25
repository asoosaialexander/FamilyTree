import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../shared/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    this.personService.getPersons().subscribe(
      persons => this.persons = persons
    );
  }

  addPerson(){
    
  }

}
