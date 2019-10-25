import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../shared/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  private url = environment.apiUrl + 'people';
  error:any;

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  addPerson(person: Person): Observable<Person> {
    console.log(JSON.stringify(person));
    return this.http.post<Person>(this.url, person);
  }
}
