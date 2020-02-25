import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { UserCacheService } from 'src/app/service/user-cache.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.sass']
})
export class NavbarTopComponent implements OnInit {

  currency: string
  language: string
  constructor(private pref: UserCacheService) {
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
