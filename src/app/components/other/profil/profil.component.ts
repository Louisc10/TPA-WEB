import { Component, OnInit } from '@angular/core';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { AuthService } from 'angularx-social-login';
import { MatDialogRef } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  uz
  account;
  constructor(private authService: AuthService, private user: UserCacheService,
    public dialogRef: MatDialogRef<ProfilComponent>,
    private apolo: BackendServiceService, private rou: Router) { }

  ngOnInit() {
    var email = localStorage.getItem("user");
    email = (email == null) ? "" : email
    console.log("aaa" + window.localStorage.getItem("user"))
    this.apolo.getAdmin(email).subscribe(
      async Query => {
        this.account = Query.data.getAdmin
        await this.x()
      }
    )
  }
  x() {
    console.table(this.account[0])
    this.uz = this.user.user = this.account[0]
  }

  signOut() {
    this.user.user = null
    this.user.currency = "IDR"
    this.user.language = "ID"
    this.uz = null

    if (this.authService.authState != null)
      this.authService.signOut();

    localStorage.setItem("user", null)
    this.dialogRef.close()
  }
}
