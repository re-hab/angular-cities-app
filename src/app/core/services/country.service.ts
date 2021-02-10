import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryServiceConstants } from '../defines/app.constants';
import { Country } from '../models/country'
import { Observable } from 'rxjs';


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

  
  getCountry(id: any) {
    return this.http.get(countryServiceConstants.countryById+id);
  }

  addCountry(name: string) {
    const requestBody = {
      "Name": name
    }
    return this.http.post(countryServiceConstants.countries, requestBody);
  }


  updateCountry(data: Country) {
    const requestBody = {
      "Id": data.id,
      "Name": data.name
    }
    return this.http.put(countryServiceConstants.countries, requestBody);
  }

  
  deleteCountry(id: string) {
    return this.http.delete(countryServiceConstants.countryById + id)
  }
}
