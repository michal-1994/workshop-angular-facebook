import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-sign-up-page',
    templateUrl: './user-sign-up-page.component.html',
    styleUrls: ['./user-sign-up-page.component.scss']
})
export class UserSignUpPageComponent implements OnInit {
    isRegistrationFinish = false;
    
    registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
        passwordConfirmation: new FormControl(),
        person: new FormGroup({
            name: new FormControl(),
            surname: new FormControl()
        })
    })

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        const form = this.registerForm.getRawValue();
        const status = this.userService.addUser({
            email: form.email,
            password: form.password,
            name: form.person.name,
            surname: form.person.surname
        });

        if (status) {
            this.isRegistrationFinish = true;
        }
        // this.userService.signIn(this.credentials as Credentials);
        // this.router.navigateByUrl('/user/profile');
    }
}
