import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { AuthService } from '../services/auth.service';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    protected localStorageServiceService: LocalStorageServiceService
  ) {}

  myDate = new Date();
  datePipe = new DatePipe('en-US');
  formattedDate = this.datePipe.transform(this.myDate, 'dd/MM/yyyy');
  myObject = this.localStorageServiceService.getItem('users')[0];
  text?: string;
  posts?: IPost[] = [];

  click() {
    console.log(this.text);
    this.posts?.push({
      text: this.text as string,
      id: (Math.random() * 100).toString(),
      autorName: this.myObject.name,
      autorType: this.myObject.typeUser,
    });
  }

  get getUser() {
    return this.myObject;
  }

  ngOnInit(): void {}
}
