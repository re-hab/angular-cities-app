import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private toastr: ToastrService,
    ) {
    }

    canActivate() {
        if (localStorage.getItem('TOKEN')) {
            return true;
        } else {
            /**
             * Otherwise redirect to Login page
             */
            this.router.navigate(['/']);
            this.toastr.error('You are not allowed to do this.');
            return false;
        }
    }
}
