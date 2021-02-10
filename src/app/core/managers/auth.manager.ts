import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthManager {

    // public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router,
    ) {
    }

    setToken(token: any){
        localStorage.setItem('TOKEN', token);
    }

    getToken(){
        localStorage.getItem('TOKEN')
    }

    removeToken(){
        localStorage.removeItem('TOKEN');
    }


    login(data: any) {

        const requestBody = {
            "Email": data.email,
            "Password": data.password
        }

        this.authService.login(requestBody).subscribe((response: any) => {
            this.setToken(response.token);
            // this.isLoggedIn.next(true);
            this.router.navigate(['/country']);
            

        }, (error: any) => {
            this.toastr.error('Please check your right email or password value.');
        });
    }

    logout() {
        this.removeToken();
        this.router.navigate(['/']);
        // this.isLoggedIn.next(false);
      }
}