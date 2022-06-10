import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserSignInPageComponent } from './pages/user-sign-in-page/user-sign-in-page.component';
import { UserSignOutPageComponent } from './pages/user-sign-out-page/user-sign-out-page.component';
import { UserSignUpPageComponent } from './pages/user-sign-up-page/user-sign-up-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserProfilePageComponent,
    UserSignInPageComponent,
    UserSignOutPageComponent,
    UserSignUpPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule
]
})
export class UserModule { }
