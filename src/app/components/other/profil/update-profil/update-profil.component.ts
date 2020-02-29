import { Component, OnInit } from '@angular/core';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { AuthService } from 'angularx-social-login';
import { MatDialogRef } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.sass']
})
export class UpdateProfilComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.minLength(10),
    Validators.maxLength(12)
  ]);

  uz: Admin = new Admin()
  account;
  constructor(private authService: AuthService, private user: UserCacheService,
    public dialogRef: MatDialogRef<UpdateProfilComponent>,
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
    this.user.user = this.account[0]
    this.uz.Email = localStorage.getItem("user");
    this.uz.BackName = this.account[0].backname
    this.uz.FrontName = this.account[0].frontname
    this.uz.PhoneNumber = this.account[0].phonenumber
    this.uz.Password = this.account[0].password
    this.uz.Language = this.account[0].language
    console.table(this.uz)
  }

  update() {
    this.apolo.updateAdmin(this.uz).subscribe(
      async Query => {
        this.account = Query.data.updateAdmin
        await this.dialogRef.close()
        await location.reload()
      }
    )
  }
}
