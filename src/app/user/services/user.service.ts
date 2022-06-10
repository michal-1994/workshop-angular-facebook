import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Credentials } from '../interfaces/credentials.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLogged = false;

    constructor() { }

    async signIn(credentials: Credentials) {
        console.debug('User is login', credentials.email);
        this.isLogged = true;
        return true;
    }
}
