import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    protected localStorageServiceService: LocalStorageServiceService
  ) {}
  myObject = this.localStorageServiceService.getItem('users')[0];

  ngOnInit(): void {

    console.log(this.myObject);
  }

  get getUser() {
    console.log(this.localStorageServiceService.getItem('users')[0]);

    return this.myObject;
  }

  get getAge() {
    return this.myObject;
  }
}
