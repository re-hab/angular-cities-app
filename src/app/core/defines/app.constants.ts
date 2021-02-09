import { environment } from '../../../environments/environment';

export const authServiceConstants = {
  login: environment.baseUrl + 'user/login'
};

export const countryServiceConstants = {
  countries: environment.baseUrl + 'country'
};
