import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.sass']
})
export class NavbarTopComponent implements OnInit {

  currency: string
  language: string
  account
  constructor(private pref: UserCacheService, private apolo: BackendServiceService) {
    console.log(pref);
    if (pref.currency == null || pref.currency == "") {
      pref.currency = "IDR"
    }
    if (pref.language == null || pref.language == "") {
      pref.language = "EN"
    }
    this.currency = pref.currency
    this.language = pref.language
  }

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
    this.pref.language = this.account[0].language
    this.language = this.pref.language
  }

  changeCur(x) {
    this.pref.currency = x
    this.currency = x
  }

  changeLang(x) {
    this.pref.language = x
    this.language = x
  }

}
