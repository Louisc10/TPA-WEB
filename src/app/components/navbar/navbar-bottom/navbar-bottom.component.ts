import { Component, OnInit } from '@angular/core';
import { CardRightComponent } from '../../daftar-login/card-right/card-right.component';
import { MatDialog } from '@angular/material';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.sass']
})
export class NavbarBottomComponent implements OnInit {

  constructor(private dialog : MatDialog, private authService: AuthService) { }
  private user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
  }

  openLogin(){
    this.dialog.open(CardRightComponent);
  }

  userPresent():boolean{
    return this.loggedIn;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
