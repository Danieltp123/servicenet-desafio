import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CreateService {
  

  constructor(
    private _http: Http
  ) { }

  getLocationZipCode(zipCode) {
    return this._http.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  }
 
}
