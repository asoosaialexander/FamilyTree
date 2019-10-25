import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../shared/Person';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  persons: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    this.peopleService.getPeople().subscribe(
      persons => this.persons = persons
    );
  }

  onDelete(id:number,name:string) {
    if (confirm("Are you sure to delete \"" + name+"\"?")) {
      this.peopleService.deletePerson(id).subscribe(
        res=>{},
        err=>{
          console.log(err);
        }
      );
    }
  }

}
