import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-sign-out-page',
  templateUrl: './user-sign-out-page.component.html',
  styleUrls: ['./user-sign-out-page.component.scss']
})
export class UserSignOutPageComponent implements OnInit {
    isLogoutFinish = false;

  constructor(
      private userService: UserService
  ) { }

  ngOnInit(): void {
      this.isLogoutFinish = this.userService.signOut();
  }

}
