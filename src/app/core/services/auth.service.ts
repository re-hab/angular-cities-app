import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authServiceConstants } from '../defines/app.constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
  ) {
  }


  login(data: any) {
    return this.http.post(authServiceConstants.login, data);
  }
}
