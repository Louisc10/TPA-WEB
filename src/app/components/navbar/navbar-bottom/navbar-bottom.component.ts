import { Component, OnInit } from '@angular/core';
import { CardRightComponent } from '../../daftar-login/card-right/card-right.component';
import { MatDialog } from '@angular/material';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { ProfilComponent } from '../../other/profil/profil.component';
import { Admin } from 'src/app/models/admin';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.sass']
})
export class NavbarBottomComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private userService: UserCacheService,
    private apolo: BackendServiceService) { }
  private user: SocialUser;
  private users;
  private account;
  private loggedIn: boolean = false;
  private email: String

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(user);
    // });
    // this.users = this.userService.user
    // this.loggedIn = (this.user != null);
    this.email = localStorage.getItem("user");
    this.email = (this.email == null) ? "" : this.email
    console.log("aaa" + window.localStorage.getItem("user"))
    this.apolo.getAdmin(this.email).subscribe(
      async Query => {
        this.account = Query.data.getAdmin
        await this.x()
      }
    )

  }

  x() {
    console.log("Email : " + this.email);
    this.users = this.account[0]
    console.table(this.users)
    this.loggedIn = (this.users != null);
  }
  openLogin() {
    const dialogRef = this.dialog.open(CardRightComponent)
    // dialogRef.afterClosed().subscribe(result => {
    //   this.user = result.account;
    //   this.loggedIn = (this.user != null);
    // });
  }

  getInitial(): String{
    console.log(this.users.frontname)
    console.log(this.users.backname)
    return String(this.users.frontname).toUpperCase().charAt(0) + String(this.users.backname).toUpperCase().charAt(0)
  }

  userPresent(): boolean {
    return this.loggedIn;
  }

  signOut(): void {
    this.dialog.open(ProfilComponent, {
      width: '800px'
    });
  }
}
