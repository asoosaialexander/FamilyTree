import { Component, OnInit } from '@angular/core';
import { PersonDetail } from 'src/app/shared/PersonDetail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: PersonDetail;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.peopleService.getPersonDetail(id).subscribe(personDetail => {
      this.person = personDetail;
    });
  }

}
