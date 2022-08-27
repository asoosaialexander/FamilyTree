import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpouseService {

  private url = environment.apiUrl + 'spouses/';

  constructor(private http: HttpClient) { }

  addPerson(personId: number, spouseId: number) {
    return this.http.post(this.url + '?personId=' + personId + '&spouseId=' + spouseId, null);
  }

  deletePerson(personId: number, spouseId: number) {
    return this.http.delete(this.url + '?personId=' + personId + '&spouseId=' + spouseId);
  }
}
