import { Injectable } from '@angular/core';
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
export class LoginService {
  users: IUser[] = [];

  constructor(private localStorageServiceService: LocalStorageServiceService) {}

  checkAccount(user: Pick<IUser, 'email' | 'password'>) {
    this.users = this.localStorageServiceService.getItem('users') || [];

    if (
      this.users.find(
        (el) => el.email === user.email && el.password === user.password
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
