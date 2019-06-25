import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../shared/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  private url = 'https://localhost:5001/api/persons';
  error:any;

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  addPerson(person: Person): Observable<Person> {
    //console.log(`person details ${{...person}}`);
    return this.http.post<Person>(this.url, person, httpOptions)
      .pipe(
        //catchError(this.handleError("addPerson",person))
      );
  }
}
