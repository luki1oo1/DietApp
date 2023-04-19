import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
import { IUser, RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  typeUser: string = '';
  gender: string = '';
  emailTaken: boolean = false;
  registerForm!: FormGroup;
  users: IUser[] = [];
  selectedAge!: number;
  ageList: number[] = [];

  constructor(
    private registerService: RegisterService,
    protected localStorageServiceService: LocalStorageServiceService,
    private router: Router
  ) {
    this.users = localStorageServiceService.getItem('users') || [];
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      postcode: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      skills: new FormControl(null, [Validators.required]),
    });

    this.registerForm.valueChanges.subscribe((value) => {
      if (this.emailTaken) {
        this.emailTaken = false;
      }
    });

    for (let i = 18; i <= 99; i++) {
      this.ageList.push(i);
    }
  }

  onSubmit() {
    this.registerService.saveUser({...this.registerForm.value, typeUser: this.typeUser}).subscribe(
      (result) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
        this.emailTaken = true;
      }
    );
  }
}
