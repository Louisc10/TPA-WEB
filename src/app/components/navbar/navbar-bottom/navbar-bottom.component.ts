import { Component, OnInit } from '@angular/core';
import { CardRightComponent } from '../../daftar-login/card-right/card-right.component';
import { MatDialog } from '@angular/material';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { ProfilComponent } from '../../other/profil/profil.component';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.sass']
})
export class NavbarBottomComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private authService: AuthService,
    private userService: UserCacheService) { }
  private user: SocialUser;
  private users: Admin;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
    // this.users = this.userService.user
    // this.loggedIn = (this.user != null);
  }

  openLogin(){
    this.dialog.open(CardRightComponent);
  }

  userPresent():boolean{
    return this.loggedIn;
  }

  signOut(): void {
    this.dialog.open(ProfilComponent);
  }
}
