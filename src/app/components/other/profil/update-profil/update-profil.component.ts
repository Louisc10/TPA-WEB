import { Component, OnInit } from '@angular/core';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { AuthService } from 'angularx-social-login';
import { MatDialogRef } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Admin } from 'src/app/models/admin';
import { NumberCheckerService } from 'src/app/service/number-checker.service';

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
  subscribe: boolean = false
  uz: Admin = new Admin()
  account;
  constructor(private authService: AuthService, private user: UserCacheService,
    public dialogRef: MatDialogRef<UpdateProfilComponent>,
    private apolo: BackendServiceService, private rou: Router,
    private xx: NumberCheckerService) { }

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
    this.uz.Currency = this.account[0].currency
    console.table(this.uz)
  }

  update() {
    if (this.subscribe) {
      this.apolo.createSubscription(this.uz.Email).subscribe(
        async Query => {
          this.account = Query.data.createSubscription
          alert("Success Subscribe")
        }
      )
    }

    let zz = this.xx.validate(this.account[0].phonenumber)
    if (zz["validate"] == false || zz["validate"] == "false") {
      alert("Not Valid Phone Number")
    }
    else {
      // this.xx.init(this.uz.PhoneNumber)
      // console.log(this.xx.getCheck())
      this.apolo.updateAdmin(this.uz).subscribe(
        async Query => {
          this.account = Query.data.updateAdmin
          await this.dialogRef.close()
          await location.reload()
        }
      )

    }
  }
}
