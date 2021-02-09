import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthManager } from 'src/app/core/managers/auth.manager'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authManager: AuthManager,
    ) { }

  ngOnInit(): void {
    localStorage.removeItem('TOKEN');
    this.initForm();
  }

  
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern('^[0][1][0-9]{9}$')
      ]),
    });
  }
  submit(){

    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authManager.login(this.loginForm.value)
    }

  }
}
