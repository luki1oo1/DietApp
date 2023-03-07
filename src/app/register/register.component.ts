import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  typeUser: string = '';
  gender: string = '';

  registerForm!: FormGroup;

  constructor(private localStorageService: LocalStorageServiceService) {}
  saveUser(arg: Object) {
    const user = arg;
    this.localStorageService.setItem(
      this.registerForm.value.email === null
        ? this.registerForm.value.dietEmail
        : this.registerForm.value.email,
      user
    );
  }

  getUser() {
    const user = this.localStorageService.getItem(
      this.registerForm.value.email === null
        ? this.registerForm.value.dietEmail
        : this.registerForm.value.email
    );
    console.log(user);
  }

  removeUser() {
    this.localStorageService.removeItem(
      this.registerForm.value.email === null
        ? this.registerForm.value.dietEmail
        : this.registerForm.value.email
    );
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),

      dietFName: new FormControl(null, [Validators.required]),
      dietLName: new FormControl(null, [Validators.required]),
      dietAddress: new FormControl(null, [Validators.required]),
      dietEmail: new FormControl(null, [Validators.required]),
      dietPassword: new FormControl(null, [Validators.required]),
      skills: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    console.log(this.typeUser);
  }

  submit() {
    console.log(this.registerForm.value);
    this.saveUser(this.registerForm.value);
  }
}
