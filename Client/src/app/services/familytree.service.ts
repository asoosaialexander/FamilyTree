import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FamilyTree } from '../shared/FamilyTree';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class FamilytreeService {


  private url = environment.apiUrl + 'familytree/';

  constructor(private http: HttpClient) { }

  getFamilyTree(personId: number): Observable<FamilyTree> {
    return this.http.get<FamilyTree>(this.url + personId, httpOptions);
  }
}
