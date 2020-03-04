import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { BackendServiceService } from '../../../service/backend-service.service';
import { Query } from 'src/app/models/query';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { Admin } from 'src/app/models/admin';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.sass']
})
export class CardRightComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  private account;
  private username: String = null;
  private password: String = null;
  private status: String = " hidden";
  private visible: String = "password";
  private condition: String = "remove_red_eye";

  constructor(private authService: AuthService,
    private apollo: BackendServiceService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CardRightComponent>,
    private userCac: UserCacheService,
    private rou: Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.regApollo()
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  private regApollo() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    console.table(this.user)
    var admin: Admin = new Admin();
    admin.Email = this.user.email
    admin.BackName = this.user.lastName
    admin.FrontName = this.user.firstName
    admin.PhoneNumber = ""
    admin.Password = this.user.email
    admin.Language = "EN"
    admin.Currency = "IDR"
    this.apollo.createAdmin(admin).subscribe(
      async Query => {
        this.account = Query.data.createAdmin
        await console.table(this.account)
        await window.localStorage.setItem("user", this.user.email);
        location.reload()
      }
    );
  }

  checkLogin(): void {
    this.username = (<HTMLInputElement>document.getElementById("userinput")).value;
    this.password = ((this.status == "") ?
      (<HTMLInputElement>document.getElementById("passinput")).value : "");

    if (this.username == "") {
      alert("Can't Be Empty");
    }
    else if (this.isValidEmail(this.username) || this.isValidPhone(this.username)) {
      this.apollo.getAdmin(this.username).subscribe(
        async Query => {
          this.account = Query.data.getAdmin
          await this.met();
        }
      );

    }
    else {
      alert("Not a email or phone number")
    }

  }

  met() {
    console.table(this.account)
    if (this.account.length == 1) {
      this.status = "";
    }
    else {
      this.status = " hidden";
      this.dialog.open(RegisterComponent)
    }

    if (this.password != "") {
      console.log(this.username)
      if (this.account[0]["password"] == this.password) {
        alert("Success");
        this.userCac.user = this.account
        console.log(this.account)
        window.localStorage.setItem("user", this.account[0].email);

        this.dialogRef.close()
        location.reload()
      }
      else {
        if (this.status == "") {
          alert("False & Failed");
          (<HTMLInputElement>document.getElementById("passinput")).value = "";
        }
        else {
          alert("Provide Password")
        }
      }
    }
    // this.account = null
  }

  private isValidPhone(phone: String): boolean {
    if (phone == "") {
      return false
    }
    else if (phone.length < 10 || phone.length > 12) {
      return false
    }
    else {
      for (var i = 0; i < phone.length; i++) {
        if (phone.charAt(i) < '0' || phone.charAt(i) > '9') {
          return false
        }
      }
    }

    return true
  }

  private isValidEmail(email: String): boolean {
    if (email.startsWith('@') || email.startsWith('.') || email.endsWith('@') || email.endsWith('.')) {
      return false
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      return false
    }
    else if (email.indexOf('@', email.indexOf('@') + 1) != -1) {
      return false
    }
    else if (email.charAt(email.indexOf('@') - 1) == '.' || email.charAt(email.indexOf('@') + 1) == '.') {
      return false
    }


    return true
  }

  changeCondition() {
    if (this.visible == "text") {
      this.visible = "password"
    }
    else {
      this.visible = "text"
    }
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }


}
