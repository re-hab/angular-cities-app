import { Component, OnInit } from '@angular/core';
import { CountryManager } from 'src/app/core/managers/country.manager'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(
    private countryManager: CountryManager
  ) { }

  ngOnInit(): void {
    this.countryManager.getCountries();
  }

}
