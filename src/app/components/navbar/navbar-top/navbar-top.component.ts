import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.sass']
})
export class NavbarTopComponent implements OnInit {
  currency: string = "USD";
  language: string = "ID";
  constructor() { }

  ngOnInit() {
  }

  changeToUSD(){
    this.currency = "USD"
  }
  
  changeToIDR(){
    this.currency = "IDR"
  }
  
  changeToSGD(){
    this.currency = "SGD"
  }
  
  changeToID(){
    this.language = "ID"
  }

  changeToEN(){
    this.language = "EN"
  }

}
