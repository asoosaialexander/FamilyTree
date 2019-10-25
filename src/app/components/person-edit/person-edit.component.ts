import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Person } from 'src/app/shared/Person';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    if (id == 0) {
      this.person = {
        id: 0,
        name: "",
        gender: "",
        occupation: "",
        residence: ""
      }
    }
    else {
      this.peopleService.getPerson(id).subscribe(person => {
        this.person = person;
      });
    }
  }

  submitForm() {
    if (this.person.id == 0) {
      this.peopleService.addPerson(this.person).subscribe();
    } else {
      this.peopleService.updatePerson(this.person.id, this.person).subscribe();
    }
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
