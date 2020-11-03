import { Component, OnInit } from '@angular/core';
import { PersonDetail } from 'src/app/shared/PersonDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from 'src/app/services/people.service';
import { environment } from 'src/environments/environment';

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
    private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.peopleService.getPersonDetail(id).subscribe(personDetail => {
      this.person = personDetail;
    });
  }

  getImage(fileName: string) {
    if (!fileName) {
      fileName = 'no-image.jpg';
    }
    return `${environment.resourceUrl}/images/${fileName}`;
  }

  navigateToPerson(personId: number) {
    this.router.navigate(['/personDetail/' + personId]);
    this.peopleService.getPersonDetail(personId).subscribe(personDetail => {
      this.person = personDetail;
    });
  }
  getPersonLink(personId: number) {
    return (environment.rootUrl + 'personDetail/' + personId);
  }

  goToList() {
    this.router.navigate(['../../person']);
  }

  getAge(birthYear: number) {
    return birthYear > 0 ? new Date().getFullYear() - birthYear : 'Unknown';
  }
}
