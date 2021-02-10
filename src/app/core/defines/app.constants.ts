import { environment } from '../../../environments/environment';

export const authServiceConstants = {
  login: environment.baseUrl + 'user/login'
};

export const countryServiceConstants = {
  countries: environment.baseUrl + 'country',
  countryById: environment.baseUrl + 'country/',
};

export const cityServiceConstants = {
  cities: environment.baseUrl + 'city',
  cityById: environment.baseUrl + 'city/',
  citiesofCountry: environment.baseUrl + 'city/getcities/'
};


export class constants {
public static errorMessage: string = 'Something wrong has happened.';
}
