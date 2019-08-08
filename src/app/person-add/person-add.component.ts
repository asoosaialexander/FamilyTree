import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { PersonService } from '../services/person.service';
import { Person } from '../shared/Person';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  name = new FormControl('');
  isAlive = new FormControl('');
  mother = new FormControl('');
  father = new FormControl('');
  gender = new FormControl('');
  birthYear = new FormControl('');
  occupation = new FormControl('');
  residence = new FormControl('');
  notes = new FormControl('');

  person: Person;

  constructor(private location: Location, private personService: PersonService) { }

  ngOnInit() {
  }

  submitForm() {
    this.person = {
      name: this.name.value,
      isAlive: this.isAlive.value,
      father:this.father.value,
      mother:this.mother.value,
      gender: this.gender.value,
      birthYear: this.birthYear.value,
      occupation: this.occupation.value,
      residence:this.residence.value,
      notes: this.notes.value
    }
    console.log(this.person);
    this.personService.addPerson(this.person).subscribe();
    //this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
