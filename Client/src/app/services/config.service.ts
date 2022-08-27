import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../shared/Config';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  configUrl = '../assets/config.json';
  config: Config;

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl, { observe: 'response' });
  }

  showConfig() {
    this.getConfig().subscribe(
      res => {
        // display its headers
        const keys = res.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${res.headers.get(key)}`);
        this.config = { ...res.body };
      }
    );
  }
}
