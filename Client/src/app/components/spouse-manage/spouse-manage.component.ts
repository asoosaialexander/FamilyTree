import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Person } from 'src/app/shared/Person';
import { SpouseService } from 'src/app/services/spouse.service';

@Component({
  selector: 'app-spouse-manage',
  templateUrl: './spouse-manage.component.html',
  styleUrls: ['./spouse-manage.component.css']
})

export class SpouseManageComponent implements OnInit {

  @Input() personId: number;
  @Input() gender: string;
  selectedSpouse = 0;
  spouses: Person[];
  people: Person[];

  constructor(
    private peopleService: PeopleService,
    private spouseService: SpouseService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data.filter(p => p.gender !== this.gender);
    });
    this.peopleService.getSpouses(this.personId).subscribe(spouses => {
      this.spouses = spouses;
    });
  }

  addSpouse() {
    if (this.selectedSpouse !== 0) {
      this.spouseService.addPerson(this.personId, this.selectedSpouse).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  removeSpouse(spouseId: number) {
    this.spouseService.deletePerson(this.personId, spouseId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
