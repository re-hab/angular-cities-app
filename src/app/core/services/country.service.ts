import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryServiceConstants } from '../defines/app.constants';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getCountries() {
    return this.http.get(countryServiceConstants.countries);
  }
}
