import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageServiceService } from './local-storage-service.service';

export interface IUser {
  name: string;
  surname: string;
  address: string;
  email: string;
  password: string;
  skills: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  users: IUser[] = [];

  constructor(private localStorageServiceService: LocalStorageServiceService) {
    this.users = localStorageServiceService.getItem('users') || [];
  }

  saveUser(user: IUser): Observable<boolean> {
    if (this.users.find((el) => el.email === user.email)) {
      return throwError(() => 'Email taken')
    }

    this.users.push(user);
    this.localStorageServiceService.setItem('users', this.users);

    return of(true);
  }
}
