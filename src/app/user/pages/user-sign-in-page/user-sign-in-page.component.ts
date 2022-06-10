import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../interfaces/credentials.interface';
import { UserService } from '../../services/user.service';

type MyNullable<T> = {
    [P in keyof T]: T[P] | null;
} 
@Component({
    selector: 'app-user-sign-in-page',
    templateUrl: './user-sign-in-page.component.html',
    styleUrls: ['./user-sign-in-page.component.scss']
})
export class UserSignInPageComponent implements OnInit {
    credentials: MyNullable<Credentials> = {
        email: null,
        password: null
    }

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('credentials', this.credentials);
        this.userService.signIn(this.credentials as Credentials);
        this.router.navigateByUrl('/user/profile');
    }

}
