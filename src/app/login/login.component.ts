import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;

  constructor() {}


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  submit() {
    this.signupForm.value;
    if (!null) {
      console.log(
        Object.keys(localStorage).find(
          (el) => el === this.signupForm.value.username
        )
      );

      if (
        this.signupForm.value.username ===
          Object.keys(localStorage).find(
            (el) => el === this.signupForm.value.username
          ) &&
        this.signupForm.value.password ===
          Object.keys(localStorage).find(
            (el) => el === this.signupForm.value.password
          )
      ) {
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'false');
        }, 5000);
      } else {
        localStorage.setItem('isLoggedIn', 'false');
      }
    }
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
