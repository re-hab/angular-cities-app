import { Injectable } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class CountryManager {

    constructor(
        private countryService: CountryService,
        private toastr: ToastrService,
        private router: Router,
    ) {
    }
    
    getCountries(){
        this.countryService.getCountries().subscribe((response: any) => {
        console.log('countries', response)
        return response;

        }, (error: any) => {
            this.toastr.error('');
        });
    }
}