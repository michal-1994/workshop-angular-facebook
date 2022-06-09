import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserSignInPageComponent } from './pages/user-sign-in-page/user-sign-in-page.component';
import { UserSignOutPageComponent } from './pages/user-sign-out-page/user-sign-out-page.component';
import { UserSignUpPageComponent } from './pages/user-sign-up-page/user-sign-up-page.component';

const routes: Routes = [
    {
        path: 'profile',
        component: UserProfilePageComponent
    },
    {
        path: 'register',
        component: UserSignUpPageComponent
    },
    {
        path: 'login',
        component: UserSignInPageComponent
    },
    {
        path: 'logout',
        component: UserSignOutPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
