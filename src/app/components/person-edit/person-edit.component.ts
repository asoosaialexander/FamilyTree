import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Person } from 'src/app/shared/Person';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;
  fathers: Person[];
  mothers: Person[];
  progress: number;
  message: string;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.peopleService.getFathers().subscribe(fathers => {
      this.fathers = fathers;
    });
    this.peopleService.getMothers().subscribe(mothers => {
      this.mothers = mothers;
    });

    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    if (id == 0) {
      this.person = {
        id: 0,
        isAlive: true,
        name: "",
        gender: "",
        occupation: "",
        residence: "",
        photo: ""
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

  getImage(fileName: string) {
    if (!fileName) {
      fileName = "no-image.jpg"
    }
    return environment.resourceUrl + "/images/" + fileName;
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();

    formData.append('file', fileToUpload, fileToUpload.name);

    this.uploadService.uploadFile(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.person.photo = fileToUpload.name;
        this.onUploadFinished.emit(event.body);
      }
    });
  }
}
