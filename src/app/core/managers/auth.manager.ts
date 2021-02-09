import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthManager {

    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private authService: AuthService,
        // private toastr: ToastrService,
        private router: Router,
    ) {
    }

    login(data: any) {
        console.log(data)
        const requestBody = {
            "Email": data.email,
            "Password": data.password
        }
        this.authService.login(requestBody).subscribe((response: any) => {
            console.log(response)
            localStorage.setItem('TOKEN', response.token);
            console.log(localStorage.getItem('TOKEN'))
            this.isLoggedIn.next(true);
            

        }, (error: any) => {
          
        });
    }
}