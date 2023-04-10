import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { IUser, LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  loginFlag: boolean = false;
  returnUrl!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private authGuardService: AuthGuardService
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  checkAccount(arg: IUser) {
    this.loginFlag = this.loginService.checkAccount(arg);
  }

  submit() {
    const formValue = this.signupForm.value;
    const logIn = this.authService.login(formValue.username, formValue.password);
    if(!logIn) {
        console.log('username or password incorrect')
    }
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
