import { environment } from '../../../environments/environment';

export const authServiceConstants = {
  login: environment.baseUrl + 'user/login'
};

export const countryServiceConstants = {
  countries: environment.baseUrl + 'country',
  deleteCountry: environment.baseUrl + 'country/',
};

export class constants {
public static errorMessage: string = 'Something wrong has happened.';
}
