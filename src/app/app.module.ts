import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    DashboardComponent,
    ProfileUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
