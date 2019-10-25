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

export class PeopleService {

  private url = environment.apiUrl + "people/";
  error: any;

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  getPerson(id:number):Observable<Person>{
    return this.http.get<Person>(this.url+id);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }

  updatePerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(this.url + id, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
