import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cityServiceConstants } from '../defines/app.constants';
import { City } from '../models/city'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CityService {
  constructor(
    private http: HttpClient,


  ) {
  }

  getCities() {
    return this.http.get(cityServiceConstants.cities);
  }

  getCitiesofCountry(countryId: any) {
    return this.http.get(cityServiceConstants.citiesofCountry+countryId);
  }

  addCity(data: City) {
    const requestBody = {
      "Name": data.name,
      "CountryId": data.countryId
    }

    // const requestBody = {
    //   "Name": "a",
    //   "CountryId": 12
    // }

    return this.http.post(cityServiceConstants.cities, requestBody);
  }


  updateCity(data: City) {
    const requestBody = {
      "Id": data.id,
      "Name": data.name,
      "CountryId": data.countryId
    }
    return this.http.put(cityServiceConstants.cities, requestBody);
  }

  
  deleteCity(id: string) {
    return this.http.delete(cityServiceConstants.cityById + id)
  }
}
